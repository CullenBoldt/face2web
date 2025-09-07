import re

import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Setup Chrome
options = webdriver.ChromeOptions()
options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                     "AppleWebKit/537.36 (KHTML, like Gecko) "
                     "Chrome/116.0.0.0 Safari/537.36")

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

driver.get("https://www.facebook.com/")
urls = ["https://m.facebook.com/Restaurante-Puerta-de-los-Montes-111185337348004",
        "https://m.facebook.com/menjarperaportar?ref=bookmarks",
        "https://www.facebook.com/acasadopulpo/",
        'https://m.facebook.com/erkiaga2016',
        "https://www.facebook.com/elduettocaldesdemalavella",
        "http://www.facebook.com/CASAROSADECALDES",
        'https://www.facebook.com/restaurantserinya/',
        "https://www.facebook.com/LaVostraPizza/",
        "http://www.facebook.com/labodegaguaro"]

for url in urls:
    driver.get(url)

    # Optional: wait for the page to load
    import time
    time.sleep(5)

    # Get the full HTML of the page
    html = driver.page_source

    soup = BeautifulSoup(html, "html.parser")

    # Find the div with the attribute data-pagelet="ProfileTilesFeed_0"
    section = soup.find("div", {"data-pagelet": "ProfileTilesFeed_0"})

    emails = []
    if section:
        text = section.get_text(separator=" ", strip=True)  # get all visible text
        emails = re.findall(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text)

    photo_urls = []
    cover_link = soup.find(attrs={"aria-label": "View profile cover photo"})
    if cover_link:
        if cover_link.name == "a" and cover_link.get("href"):
            photo_urls = [cover_link["href"]]
    else:
        print("No element with aria-label='View profile cover photo' found")


    print(emails)
    print(photo_urls)






def download_from_url(url, driver):

    url = "https://www.facebook.com/photo/?fbid=567000405120162&set=a.567000371786832"

    driver.get(url)

    time.sleep(3)
    soup = BeautifulSoup(html, "html.parser")

    # Find all elements with data-visualcompletion="media-vc-image"
    media_viewer = soup.find("div", {"data-pagelet": "MediaViewerPhoto"})


    image_url = None
    if media_viewer:
        # Look for the first <img> inside this div
        img_tag = media_viewer.find("img")
        if img_tag and img_tag.get("src"):
            image_url = img_tag["src"]
