import glob
import os
import subprocess
import pandas as pd
import json

from libs.utils.auth import read_website_password
from libs.utils.paths import get_restaurants_dir, service_overview_path


pd.set_option('display.max_rows', 500)
pd.set_option('display.max_columns', 500)
pd.set_option('display.width', 1000)

import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
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
        df = pd.read_csv(file, usecols=["place_id", "name", "cid"])
        dfs.append(df)

    # Concatenate all DataFrames into one
    combined_df = pd.concat(dfs, ignore_index=True)

    output_df = services_df[['cid', 'url']].merge(combined_df, on="cid")

    output_df.to_csv(service_overview_path())



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
    Reads a CSV of service URLs and checks each deployment.
    """
    services = pd.read_csv(service_overview_path())  # replace with service_overview_path()

    # Setup Chrome driver
    chrome_options = Options()
    if headless:
        chrome_options.add_argument("--headless")  # run in headless mode
    chrome_options.add_argument("--disable-gpu")
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    all_results = {}
    for index, row in services.iterrows():
        url = row['url']
        all_results[url] = check_elements(driver, url)

    driver.quit()
    for url, check in all_results.items():
        print(f"\nURL: {url}")
        for element, status in check.items():
            print(f"  {element}: {'OK' if status else 'MISSING'}")




def main():
    create_services_overview()
    check_deployed_services()

if __name__ == "__main__":
    main()