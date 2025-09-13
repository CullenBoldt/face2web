from pathlib import Path
import unicodedata
import re


def get_ids_from_row(row):
    return row['municipio_id'], row['cid']

def create_dirs(row):

    municipio_id, cid = get_ids_from_row(row)
    output_path = get_cid_output_dir(municipio_id, cid)

    images_folder = Path(f"{output_path}/images")
    data_folder = Path(f"{output_path}/data")
    config_folder = Path(f"{output_path}/config")

    images_folder.mkdir(parents=True, exist_ok=True)
    data_folder.mkdir(parents=True, exist_ok=True)
    config_folder.mkdir(parents=True, exist_ok=True)

def get_template_app_dir():
    return Path("templates/app_template")

def get_places_api_key_path():
    return Path('secrets/places_api_key')

def get_geocode_api_key_path():
    return Path('secrets/geocode_api_key')

def get_municipios_dir():
    return Path("data/municipios")

def get_municipios_raw_dir():
    return Path(f"{get_municipios_dir()}/raw/")

def get_municipios_table_path():
    return Path(f"{get_municipios_dir()}/combined_municipios.csv")

def get_restaurants_dir():
    return Path("data/restaurants/")

def get_restaurant_path(municipio_id, municipio, provincia):
    return Path(f"{get_restaurants_dir()}/{str(municipio_id)}_{str(municipio).replace(' ', '_').replace(",", "_")}_{str(provincia).replace(' ', '_').replace(",", "_")}.csv")

def get_cid_output_dir(municipio_id, cid):
    return Path(f"data/web_content/{municipio_id}/{cid}")

def get_index_path(municipio_id, cid):
    return Path(f"{get_cid_output_dir(municipio_id, cid)}/index.html")

def get_cid_header_path(municipio_id, cid):
    return Path(f"{get_cid_output_dir(municipio_id, cid)}/components/Header.tsx")

def get_cid_menu_path(municipio_id, cid):
    return Path(f"{get_cid_output_dir(municipio_id, cid)}/data/menuData.ts")

def get_cid_content_path(municipio_id, cid):
    return Path(f"{get_cid_output_dir(municipio_id, cid)}/data/content.ts")

def get_cid_image_dir(municipio_id, cid):
    return Path(f"{get_cid_output_dir(municipio_id, cid)}/images/")

def get_cid_image_path(municipio_id, cid, idx):
    return Path(f"{get_cid_image_dir(municipio_id, cid)}/photo_{idx}.jpg")

def get_bucket_image_name():
    return "gastronomio_images"

def get_bucket_image_path(row, image_id):
    municipio_id, cid = get_ids_from_row(row)
    return f'https://storage.googleapis.com/{get_bucket_image_name()}/{municipio_id}/{cid}/photo_{image_id}.jpg'

def get_cid_yaml_path(row):
    municipio_id, cid = get_ids_from_row(row)
    return Path(f"{get_cid_output_dir(municipio_id, cid)}/cloudbuild.yaml")

def get_app_path(row):
    municipio_id, cid = get_ids_from_row(row)
    return Path(f"{get_cid_output_dir(municipio_id, cid)}")

def get_cid_display_name(row):
    return row['cid']

def get_cid_repo_name(row):
    return f"{get_cid_display_name(row)}-repo"

def service_overview_path():
    return Path("data/services/service_overview.csv")

def service_with_status_overview_path():
    return Path("data/services/service_with_status_overview.csv")

def get_website_password_path():
    return Path("secrets/website_password")

def get_embed_map_key_path():
    return Path("secrets/embed_map_key")

def get_gen_ai_key_path():
    return Path("secrets/gen_ai_key")

def get_customer_csv():
    return Path("data/marketing/customer_info.csv")

def get_description_template_path(place_class):
    return Path(f"templates/profiles/{place_class}.json")

def get_service_account_json():
    return Path("secrets/cellular-nuance-468913-d5-cd335058c8ea.json")

def get_themes_path():
    return Path("templates/themes.json")