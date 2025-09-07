import requests
from bs4 import BeautifulSoup
import time
import os
import pandas as pd
import requests
from bs4 import BeautifulSoup
import lxml

BASE_WIKI = "https://en.wikipedia.org"
START_URL = f"{BASE_WIKI}/wiki/List_of_municipalities_of_Spain"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " \
                  "AppleWebKit/537.36 (KHTML, like Gecko) " \
                  "Chrome/115.0.0.0 Safari/537.36"
}




# Ensure output directory exists
os.makedirs("../data/places/raw", exist_ok=True)

# Read the input CSV
input_file = "places/wiki_provinces.csv"
df = pd.read_csv(input_file)

for _, row in df.iterrows():
    provincia = row["provincia"]
    url = row["url"]

    print(f"Scraping {provincia} from {url}...")

    try:
        # Fetch the webpage
        response = requests.get(url, headers =HEADERS)
        response.raise_for_status()

        # Parse HTML
        soup = BeautifulSoup(response.text, "html.parser")

        # Find the target table
        table = soup.find("table")
        if table is None:
            print(f"⚠️ No matching table found for {provincia}")
            continue

        # Convert HTML table to DataFrame
        df_table = pd.read_html(str(table))[0]

        # Save to CSV
        output_file = f"places/raw/{provincia.replace(' ', "_")}.csv"
        df_table.to_csv(output_file, index=False)
        print(f"✅ Saved: {output_file}")

    except Exception as e:
        print(f"❌ Error scraping {provincia}: {e}")

