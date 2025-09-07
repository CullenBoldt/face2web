from pathlib import Path
import unicodedata
import re

def clean_string(s):
    # Normalize Unicode (NFKD separates accents from letters)
    normalized = unicodedata.normalize('NFKD', s)
    # Replace 'ñ' or 'Ñ' with 'n' or 'N' explicitly
    normalized = normalized.replace('ñ', 'n').replace('Ñ', 'N')
    # Encode to ASCII bytes, ignoring non-ASCII (removes other accents)
    ascii_bytes = normalized.encode('ASCII', 'ignore')
    # Decode back to string
    ascii_str = ascii_bytes.decode('ASCII')
    # Remove any remaining special characters (keep letters, numbers, and spaces)
    clean = re.sub(r'[^A-Za-z0-9 ]+', '', ascii_str)
    return clean


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

def get_api_key_path():
    return Path('secrets/api_key.txt')

def get_places_dir():
    return Path("data/places")

def get_places_raw_dir():
    return Path(f"{get_places_dir()}/raw/")

def get_places_table_path():
    return Path(f"{get_places_dir()}/combined_places.csv")

def get_restaurants_dir():
    return Path("data/restaurants/")

def get_restaurant_path(municipio_id, municipio, provencia):
    return Path(f"{get_restaurants_dir()}/{municipio_id}_{municipio.replace(' ', '_').replace(",", "_")}_{provencia.replace(' ', '_').replace(",", "_")}.csv")

def get_cid_output_dir(municipio_id, cid):
    return Path(f"data/web_content/{municipio_id}/{cid}")

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

def get_website_password_path():
    return Path("secrets/website_password")

def get_embed_map_key_path():
    return Path("secrets/embed_map_key")