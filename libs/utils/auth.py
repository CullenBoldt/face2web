from libs.utils.paths import get_api_key_path, get_website_password_path, get_embed_map_key_path


def read_api_key():
    with open(get_api_key_path(), 'r') as file:
        return file.read().strip()

def read_website_password():
    with open(get_website_password_path(), 'r') as file:
        return file.read().strip()

def embed_map_key():
    with open(get_embed_map_key_path(), 'r') as file:
        return file.read().strip()