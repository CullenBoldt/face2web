import pandas as pd
import requests

from content_retrieval.create_municipios_table import load_municipios_table
from bs4 import BeautifulSoup

from libs.utils.auth import read_geocode_api_key, read_places_api_key
from libs.utils.cid_hash import cid_hash_from_place_id
from libs.utils.csv_updater import update_csv_with_new_keys
from libs.utils.paths import get_restaurant_path, get_municipios_table_path


def get_place_data(place_id, municipio_id, municipio, provincia, min_lang):

    details_url = "https://maps.googleapis.com/maps/api/place/details/json"
    details_params = {
        "place_id": place_id,
        "fields": "name,business_status,website,adr_address,formatted_phone_number,opening_hours,rating,reviews,photos,types",
        "language": "es",
        "key": read_places_api_key()
    }
    details_response = requests.get(details_url, params=details_params).json()
    result = details_response.get("result", {})

    website = result.get("website", "")

    if result.get('business_status') != "CLOSED_PERMANENTLY":
        if "facebook" in website or website == "":
            maps_url = f"https://www.google.com/maps/place/?q=place_id:{place_id}"
            print(f"  Website: {website}")
            print(f"  Google Maps: {maps_url}\n")

            result['cid'] = cid_hash_from_place_id(place_id)
            result['place_id'] = place_id
            result['maps_url'] = maps_url
            result['municipio_id'] = municipio_id
            result['municipio'] = municipio
            result['provincia'] = provincia
            result['website_url'] = website
            result['min_lang'] = min_lang

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

            return result


def get_province_municipio(municipio_id):
    municipios = pd.read_csv(get_municipios_table_path())

    # Select the row(s) matching municipio_id
    row = municipios.loc[municipios['municipio_id'] == municipio_id]

    if row.empty:
        raise ValueError(f"municipio_id {municipio_id} not found in table.")

    # Extract first matching row values
    municipio = row['municipio'].iloc[0]
    provincia = row['provincia'].iloc[0]
    min_lang = row['min_lang'].iloc[0]

    return municipio, provincia, min_lang


def query_municipio(municipio_id):

    print(f"\n\n\n\nPROCESSING ID {municipio_id}\n\n\n\n")

    municipio, provincia, min_lang =  get_province_municipio(municipio_id)


    results_all = []

    url = "https://maps.googleapis.com/maps/api/geocode/json"
    params = {
        "address": f"{municipio}, {provincia}, España",
        "key": read_geocode_api_key()
    }

    resp = requests.get(url, params=params).json()
    location = resp["results"][0]["geometry"]["location"]
    lat, lng = location["lat"], location["lng"]

    # Step 1: Search for restaurants in the given municipality and province
    search_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
    search_params = {
        "type":"bar",
        "key": read_places_api_key(),
        "location": f"{lat},{lng}",  # municipio centroid
        "radius": 5000,
    }


    while True:
        search_response = requests.get(search_url, params=search_params).json()

        # Step 2: Get website URLs and Google Maps URLs using place_id
        print("\n\n\nNumber of restaurants in this batch: ", len(search_response.get("results", [])))
        for place in search_response.get("results", []):
            place_id = place.get("place_id")
            results_all.append(get_place_data(place_id, municipio_id, municipio, provincia, min_lang))

        # Check if there’s another page
        next_page_token = search_response.get("next_page_token")
        if next_page_token:
            # next_page_token takes a short time to activate
            import time
            time.sleep(2)
            search_params = {
                "pagetoken": next_page_token,
                "key": read_places_api_key()
            }
        else:
            break

    results_all = [i for i in results_all if i is not None]
    return save_query_results(results_all, municipio_id, municipio, provincia)


def query_place(place_id, municipio_id):
    municipio, provincia, min_lang =  get_province_municipio(municipio_id)

    result = get_place_data(place_id, municipio_id, municipio, provincia, min_lang)
    'https://maps.app.goo.gl/u4XG8AT88fb6kLZSA'

    return save_query_results([result], municipio_id, municipio, provincia)



def save_query_results(results_all, municipio_id, municipio, provincia):
    # Save results
    results_df = pd.DataFrame(results_all)

    output_columns = [
        "cid",'name', "min_lang", 'place_id','website_url','business_status',"formatted_phone_number",
        "maps_url","municipio_id","municipio","provincia","adr_street_address",
        "adr_postal_code","adr_locality","adr_region","adr_country_name",
        "opening_hours_lunes","opening_hours_martes","opening_hours_miércoles",
        "opening_hours_jueves","opening_hours_viernes","opening_hours_sábado",
        "opening_hours_domingo", "rating","reviews","photos","types"
    ]

    for col in output_columns:
        if col not in results_df.columns:
            results_df[col] = ""  # add column with empty strings

    # Fill missing values in existing columns
    results_df = results_df.fillna("")

    output_path = get_restaurant_path(municipio_id, municipio, provincia)

    results_df[output_columns].to_csv(
        output_path,
        index=False
    )

    update_csv_with_new_keys(results_df[output_columns], output_path, 'cid')
    return output_path


def main():

    municipios = load_municipios_table()

    for i in range(1515, 1516):
        municipio = municipios.iloc[i]['municipio']
        provincia = municipios.iloc[i]['provincia']
        municipio_id = municipios.iloc[i]['municipio_id']
        min_lang = municipios.iloc[i]['min_lang']

        query_municipio(municipio_id)

if __name__ == "__main__":
    main()