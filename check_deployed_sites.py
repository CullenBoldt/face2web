import glob
import os
import subprocess
import pandas as pd
import json

from libs.utils.auth import read_website_password
from libs.utils.paths import get_restaurants_dir, service_overview_path, service_with_status_overview_path

pd.set_option('display.max_rows', 500)
pd.set_option('display.max_columns', 500)
pd.set_option('display.width', 1000)

import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import NoSuchElementException
import time
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

def create_services_overview():

    # Run the gcloud command with JSON output
    result = subprocess.run(
        ["/home/cullen/google-cloud-sdk/bin/gcloud", "run", "services", "list",
         "--platform", "managed",
         "--region", "europe-west1",
         "--format=json"],
        capture_output=True,
        text=True
    )

    # Parse the JSON output
    services = json.loads(result.stdout)

    # Convert to Pandas DataFrame
    services_df = pd.DataFrame(services)

    # Optional: show only relevant columns (name and URL)
    if 'status' in services_df.columns and 'url' in services_df['status'].iloc[0]:
        services_df['url'] = services_df['status'].apply(lambda x: x.get('url'))

    if 'metadata' in services_df.columns and 'name' in services_df['metadata'].iloc[0]:
        services_df['name'] = services_df['metadata'].apply(lambda x: x.get('name'))
        services_df['cid'] = services_df['name']
    # Find all CSV files in the directory
    csv_files = glob.glob(os.path.join(get_restaurants_dir(), "*.csv"))

    # List to hold DataFrames
    dfs = []

    for file in csv_files:
        # Read CSV
        df = pd.read_csv(file, usecols=["municipio_id", "place_id", "name", "cid"])
        dfs.append(df)

    # Concatenate all DataFrames into one
    combined_df = pd.concat(dfs, ignore_index=True)

    output_df = services_df[['cid', 'url']].merge(combined_df, on="cid")

    output_df['status'] = ""

    output_df.to_csv(service_overview_path())

def update_readme():
    # Paths
    csv_path = service_with_status_overview_path()
    readme_path = "README.md"

    # Load CSV
    df = pd.read_csv(csv_path)

    # Ensure required columns exist
    for col in ["municipio_id", "name", "cid", "url", "place_id", "status"]:
        if col not in df.columns:
            df[col] = ""

    # Make 'cid' a clickable Markdown link using 'url'
    df['cid'] = df.apply(lambda row: f"[{row['cid']}]({row['url']})" if row['cid'] else "",
                         axis=1)
    # Select only the columns we want in the desired order
    df = df[["status", "municipio_id", 'name', 'cid', 'place_id']]
    md_table = df.to_markdown(index=False)

    md_content = f"## Deployment Log\n\n{md_table}\n"

    with open(readme_path, "w", encoding="utf-8") as f:
        f.write(md_content)

def authenticate(driver):
    """
    If the page requires authentication, fill in login form.
    Modify XPaths according to your login page.
    """
    try:
        time.sleep(2)
        # Example placeholders; replace with your real login method
        username_input = driver.find_element(By.XPATH, '/html/body/div/div/div/form/input')
        submit_button = driver.find_element(By.XPATH, '/html/body/div/div/div/form/button')

        username_input.send_keys(read_website_password())

        time.sleep(.5)
        submit_button.click()

        # Wait for login to complete
        time.sleep(2)
    except NoSuchElementException:
        # If no login required, continue
        pass


def check_elements(driver, url):
    """
    Checks that the expected elements are present on the page.
    """
    driver.get(url)
    authenticate(driver)

    results = {}
    elements_to_check = [
    '//header',  # header exists
    '//main',  # main content exists
    '//footer',  # footer exists
    '//section[@id="home"]',
    '//section[@id="menu"]',
    '//section[@id="about"]',
    '//section[@id="contact"]'
]

    for xpath in elements_to_check:
        try:
            driver.find_element(By.XPATH, xpath)
            results[xpath] = True
        except NoSuchElementException:
            results[xpath] = False
    return results


def check_deployed_services(headless=True):
    """
    Reads a CSV of service URLs, checks each deployment, and updates the services table
    with a 'status' column showing ✅ if all elements are OK or ❌ otherwise.
    """
    services = pd.read_csv(service_overview_path())  # replace with your service_overview_path()

    # Setup Chrome driver
    chrome_options = Options()
    if headless:
        chrome_options.add_argument("--headless")
    chrome_options.add_argument("--disable-gpu")

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)

    all_results = {}
    status_list = []  # Track overall status per URL

    for index, row in services.iterrows():
        print(f"Checking service for {row['name']} at: {row['url']}")
        url = row['url']
        check = check_elements(driver, url)  # your existing function
        all_results[url] = check
        print(check)

        # Determine overall status: ✅ if all OK, ❌ otherwise
        overall_ok = all(status for status in check.values())
        status_list.append("✅" if overall_ok else "❌")

    driver.quit()

    # Add the status column to the services table
    services['status'] = status_list

    # Write the updated services table to CSV
    services.to_csv(service_with_status_overview_path(), index=False)
    print(f"Updated services table written to {service_with_status_overview_path()}")

    # Optional: print results
    for url, check in all_results.items():
        print(f"\nURL: {url}")
        for element, status in check.items():
            print(f"  {element}: {'OK' if status else 'MISSING'}")
        print(f"Overall status: {'✅' if all(status for status in check.values()) else '❌'}")

    return services



def main():
    create_services_overview()
    check_deployed_services()
    update_readme()

if __name__ == "__main__":
    main()