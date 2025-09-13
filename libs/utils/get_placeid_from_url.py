import re

import requests

from libs.utils.auth import read_places_api_key


import urllib.parse

def get_place_id_from_url(url: str) -> str | None:
    """
    Extracts the place ID from a Google Maps URL using the Google Places API.

    Parameters:
        url (str): Google Maps URL.
        api_key (str): Your Google Maps API key.

    Returns:
        str | None: The Place ID if found, otherwise None.
    """

    # 1. Try to extract place_id directly if present in URL
    match = re.search(r"place_id:([a-zA-Z0-9_-]+)", url)
    if match:
        return match.group(1)

    # 2. Extract latitude and longitude from URL (@lat,lng)
    coords_match = re.search(r"@([-0-9.]+),([-0-9.]+)", url)
    location_bias = None
    if coords_match:
        lat, lng = coords_match.groups()
        location_bias = f"point:{lat},{lng}"

    # 3. Extract place name from URL path (/maps/place/<name>/...)
    name_match = re.search(r"/maps/place/([^/@]+)", url)
    place_name = None
    if name_match:
        place_name = urllib.parse.unquote_plus(name_match.group(1))

    if not place_name and not location_bias:
        raise ValueError("No usable place name or coordinates found in URL.")

    # 4. Use Find Place API with name (and location bias if available)
    endpoint = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
    params = {
        "input": place_name or url,  # fallback: whole URL
        "inputtype": "textquery",
        "fields": "place_id",
        "key": read_places_api_key()
    }
    if location_bias:
        params["locationbias"] = location_bias

    response = requests.get(endpoint, params=params).json()

    if response.get("status") == "OK" and response.get("candidates"):
        return response["candidates"][0]["place_id"]

    # 5. Fallback: Nearby Search with coordinates
    if location_bias:
        nearby_endpoint = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
        params = {
            "location": location_bias.replace("point:", ""),
            "radius": 20,
            "key": read_places_api_key()
        }
        response = requests.get(nearby_endpoint, params=params).json()
        if response.get("status") == "OK" and response.get("results"):
            return response["results"][0]["place_id"]

    return None


def main():
    url = 'https://www.google.com/maps/place/Taranttela+Gin+%26+Cocktail+Room/@40.4063026,-3.6761064,20.17z/data=!4m7!3m6!1s0xd4227a4b992a3b3:0x1723978063956e8e!8m2!3d40.4064248!4d-3.6762013!10e9!16s%2Fg%2F11lkwtgj03?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D'
    print(get_place_id_from_url(url))


if __name__ == "__main__":
    main()