from libs.utils.paths import get_places_api_key_path, get_website_password_path, get_embed_map_key_path, \
    get_geocode_api_key_path, get_gen_ai_key_path


def read_places_api_key():
    with open(get_places_api_key_path(), 'r') as file:
        return file.read().strip()

def read_gen_ai_api_key():
    with open(get_gen_ai_key_path(), 'r') as file:
        return file.read().strip()

def read_geocode_api_key():
    with open(get_geocode_api_key_path(), 'r') as file:
        return file.read().strip()

def read_website_password():
    with open(get_website_password_path(), 'r') as file:
        return file.read().strip()

def embed_map_key():
    with open(get_embed_map_key_path(), 'r') as file:
        return file.read().strip()