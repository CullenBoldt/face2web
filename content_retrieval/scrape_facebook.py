import re
import time

import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

from content_retrieval.create_municipios_table import load_municipios_table
from libs.utils.paths import get_restaurant_path, get_customer_csv


def accept_cookies(driver):
    time.sleep(2)

    allow_cookies = driver.find_element(By.XPATH,
                                        '/html/body/div[3]/div[2]/div/div/div/div/div[3]/div[2]/div/div[2]/div[1]/div/div[1]/div/span/span')
    allow_cookies.click()
    time.sleep(.5)


def login(driver):

    time.sleep(2)
    email = driver.find_element(By.XPATH,
                                '/html/body/div[1]/div[1]/div[1]/div/div/div/div[2]/div/div[1]/form/div[1]/div[1]/input')
    pw = driver.find_element(By.XPATH,
                             '/html/body/div[1]/div[1]/div[1]/div/div/div/div[2]/div/div[1]/form/div[1]/div[2]/div/input')
    button = driver.find_element(By.XPATH,
                                 '/html/body/div[1]/div[1]/div[1]/div/div/div/div[2]/div/div[1]/form/div[2]/button')
    email.send_keys('josefaceille@gmail.com')
    pw.send_keys('*?Vbwcv.Q6*M7?Q')

    time.sleep(.5)
    button.click()

    time.sleep(4)

def get_email(driver, row):
    emails = []
    url = row['website_url']

    driver.get(url)

    # Optional: wait for the page to load
    time.sleep(3)

    # Get the full HTML of the page
    html = driver.page_source

    soup = BeautifulSoup(html, "html.parser")

    # Find the div with the attribute data-pagelet="ProfileTilesFeed_0"
    section = soup.find("div", {"data-pagelet": "ProfileTilesFeed_0"})

    if section:
        text = section.get_text(separator=" ", strip=True)  # get all visible text
        emails = re.findall(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text)

    return emails

def start_driver(headless):
    options = webdriver.ChromeOptions()
    if headless:
        options.add_argument("--headless")
    options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                         "AppleWebKit/537.36 (KHTML, like Gecko) "
                         "Chrome/116.0.0.0 Safari/537.36")

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

    driver.get("https://www.facebook.com/")

    return driver

def scrape_customer_data(municipio_id, headless):

    municipios = load_municipios_table()

    municipio = municipios.iloc[municipio_id]['municipio']
    provincia = municipios.iloc[municipio_id]['provincia']
    municipio_id = municipios.iloc[municipio_id]['municipio_id']

    restaurants = pd.read_csv(get_restaurant_path(municipio_id, municipio, provincia))

    customer_df = pd.read_csv(get_customer_csv())
    restaurants = restaurants[~restaurants['cid'].isin(list(customer_df['cid']))]
    if any(["facebook" in i for i in list(restaurants['website_url'].astype(str))]):
        driver = start_driver(headless)
        accept_cookies(driver)
    else:
        driver = None

    customer_output_list = []
    for _, row in restaurants.iterrows():
        print(f"Processing {row['cid']}")
        emails = []
        user_info = {}
        user_info['name'] = row['name']
        if "facebook" in str(row['website_url']):
            emails = get_email(driver, row)

        if emails:
            print(emails[0])
            user_info['email'] = emails[0]
        else:
            user_info['email'] = ""
        user_info['cid'] = row['cid']
        user_info['website_url'] = row['website_url']
        user_info['phone_number'] = row['formatted_phone_number']
        user_info['municipio_id'] = row['municipio_id']
        user_info['adr_street_address'] = row['adr_street_address']
        user_info['adr_postal_code'] = row['adr_postal_code']
        user_info['adr_locality'] = row['adr_locality']
        user_info['adr_region'] = row['adr_region']
        user_info['adr_country_name'] = row['adr_country_name']
        customer_output_list.append(user_info)

    if driver:
        driver.close()

    new_customer_df = pd.DataFrame(customer_output_list)

    # Find rows in df_b that are not in df_a (based on all columns)
    new_rows = pd.concat([new_customer_df, customer_df, customer_df]).drop_duplicates(keep=False)

    # Append them to df_a
    customer_df = pd.concat([customer_df, new_rows], ignore_index=True)
    customer_df.to_csv(get_customer_csv(), index=False)

