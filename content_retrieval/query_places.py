import pandas as pd
import requests

from content_retrieval.create_places_table import load_places_table
from bs4 import BeautifulSoup

from libs.utils.auth import read_api_key
from libs.utils.cid_hash import cid_hash_from_place_id
from libs.utils.paths import get_restaurant_path




def query_place(municipio, provencia, municipio_id):

    print(f"\n\n\n\nPROCESSING ID {municipio_id}\n\n\n\n")

    results_all = []

    API_KEY = read_api_key()

    TARGET_SUBSTRING = "facebook"  # Change this to your desired substring

    # Step 1: Search for restaurants in the given municipality and province
    search_url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
    search_params = {
        "query": f"restaurantes en {municipio}, {provencia}",
        "key": API_KEY
    }

    while True:
        search_response = requests.get(search_url, params=search_params).json()

        # Step 2: Get website URLs and Google Maps URLs using place_id
        print("Number of restaurants in this batch: ", len(search_response.get("results", [])))
        for place in search_response.get("results", []):

            place_id = place.get("place_id")
            name = place.get("name")

            details_url = "https://maps.googleapis.com/maps/api/place/details/json"
            details_params = {
                "place_id": place_id,
                "fields": "name,business_status,website,adr_address,formatted_phone_number,opening_hours,rating,reviews,photos",
                "language": "es",
                "key": API_KEY
            }
            details_response = requests.get(details_url, params=details_params).json()
            result = details_response.get("result", {})

            website = result.get("website", "")

            if result.get('business_status') != "CLOSED_PERMANENTLY":
                if TARGET_SUBSTRING in website or website == "":
                    maps_url = f"https://www.google.com/maps/place/?q=place_id:{place_id}"
                    print(f"{name}:")
                    print(f"  Website: {website}")
                    print(f"  Google Maps: {maps_url}\n")

                    result['cid'] = cid_hash_from_place_id(place_id)
                    result['place_id'] = place_id
                    result['maps_url'] = maps_url
                    result['municipio_id'] = municipio_id
                    result['municipio'] = municipio
                    result['provencia'] = provencia
                    result['website_url'] = website

                    try:
                        soup = BeautifulSoup(result['adr_address'], "html.parser")

                        for span in soup.find_all("span"):
                            cls = span.get("class")[0]
                            key = f"adr_{cls.replace('-', '_')}"
                            result[key] = span.get_text(strip=True)

                        result.pop("adr_address", None)
                    except:
                        print("unable to parse address")

                    try:
                        weekday_text = result['opening_hours']['weekday_text']

                        for item in weekday_text:
                            day, status = item.split(":", 1)
                            result["opening_hours_" + day.strip()] = status.strip()
                            result.pop("opening_hours", None)
                    except:
                        print('no opening hours')

                    results_all.append(result)

        # Check if there’s another page
        next_page_token = search_response.get("next_page_token")
        if next_page_token:
            # next_page_token takes a short time to activate
            import time
            time.sleep(2)
            search_params = {
                "pagetoken": next_page_token,
                "key": API_KEY
            }
        else:
            break

    # Save results
    results_df = pd.DataFrame(results_all)

    output_columns = [
        "cid",'name','place_id','website_url','business_status',"formatted_phone_number",
        "maps_url","municipio_id","municipio","provencia","adr_street_address",
        "adr_postal_code","adr_locality","adr_region","adr_country_name",
        "opening_hours_lunes","opening_hours_martes","opening_hours_miércoles",
        "opening_hours_jueves","opening_hours_viernes","opening_hours_sábado",
        "opening_hours_domingo", "rating","reviews","photos"
    ]

    for col in output_columns:
        if col not in results_df.columns:
            results_df[col] = ""  # add column with empty strings

    # Fill missing values in existing columns
    results_df = results_df.fillna("")

    output_path = get_restaurant_path(municipio_id, municipio, provencia)

    results_df[output_columns].to_csv(
        output_path,
        index=False
    )
    return output_path

def main():

    places = load_places_table()

    for i in range(1515, 1516):
        municipio = places.iloc[i]['municipio']
        provencia = places.iloc[i]['provincia']
        municipio_id = places.iloc[i]['municipio_id']

        query_place(municipio, provencia, municipio_id)

if __name__ == "__main__":
    main()