
import pandas as pd

from check_deployed_sites import create_services_overview, check_deployed_services
from content_release.build_and_ship_image import build_and_ship
from content_release.image_uploader import upload_images
from content_retrieval.create_places_table import load_places_table, create_places_table
from content_retrieval.image_downloader import download_images
from content_retrieval.query_places import query_place
from content_retrieval.read_menu_sheet import download_google_sheet, save_menu_ts
from content_retrieval.inject_content import prepare_content_dict, save_content_ts
from libs.utils.adapt_yaml import apply_substitutions
from libs.utils.move_app_data import move_app_data
from libs.utils.paths import create_dirs, get_restaurant_path


def orchestrate_website_generation(place_index, recreate_places, recreate_restaurants, create_repo, ship_image):
    if recreate_places:
        create_places_table()

    places = load_places_table()

    municipio = places.iloc[place_index]['municipio']
    provencia = places.iloc[place_index]['provincia']
    municipio_id = places.iloc[place_index]['municipio_id']

    if recreate_restaurants:
        municipio_path = query_place(municipio, provencia, municipio_id)

    else:
        municipio_path = get_restaurant_path(municipio_id, municipio, provencia)

    df = pd.read_csv(municipio_path)
    df["email"] = "reservas@gastronom.io"
    df = df.fillna("")

    for index, row in df.iterrows():
        create_dirs(row)

        download_images(row,2)
        upload_images(row)

        content_dict = prepare_content_dict(row)
        print(content_dict)

        save_content_ts(content_dict, row)

        sheet_id = "1Q4hPxIz-uUGx08Jwvd6Jt22-ulkPA2Yc-j5BP7uPS8A"
        #TODO: menu sheet
        # custom configuration

        #sheet_id = create_customer_menu_sheet(row)

        menu = download_google_sheet(sheet_id)
        save_menu_ts(menu, row)

        move_app_data(row)
        apply_substitutions(row)

        build_and_ship(row, create_repo, ship_image)


def main():
    place_index = 1132
    recreate_places = False
    recreate_restaurants = False
    create_repo = False
    ship_image = True
    orchestrate_website_generation(place_index, recreate_places, recreate_restaurants, create_repo, ship_image)

    create_services_overview()
    check_deployed_services()

if __name__ == "__main__":
    main()