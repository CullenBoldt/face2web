
import pandas as pd
import argparse

from check_deployed_sites import create_services_overview, check_deployed_services, update_readme
from content_enrichment.contextualize import contextualize
from content_enrichment.index_creation import generate_index_html
from content_release.build_and_ship_image import build_and_ship
from content_release.generate_header import generate_header_file
from content_release.image_uploader import upload_images
from content_retrieval.create_municipios_table import load_municipios_table, create_municipios_table
from content_retrieval.image_downloader import download_images
from content_retrieval.query_places import query_municipio, query_place
from content_retrieval.read_menu_sheet import download_google_sheet, save_menu_ts
from content_retrieval.inject_content import prepare_content_dict, save_content_ts
from content_retrieval.scrape_facebook import scrape_customer_data
from libs.utils.adapt_yaml import apply_substitutions
from libs.utils.move_app_data import move_app_data
from libs.utils.paths import create_dirs, get_restaurant_path



class WebsiteGenerator:

    def __init__(self,
                municipio_id,
                place_id,
                recreate_places,
                recreate_restaurants,
                create_repo,
                ship_image,
                update_status):

        self.municipio_id = municipio_id
        self.place_id = place_id
        self.recreate_places = recreate_places
        self.recreate_restaurants = recreate_restaurants
        self.create_repo = create_repo
        self.ship_image = ship_image
        self.update_status = update_status


    def generate_for_place(self, row, create_repo, ship_image):

        # create place directories
        create_dirs(row)

        # add contextual information
        contextualize(row)

        # get images
        download_images(row, 2)
        upload_images(row)

        # generate and save web content
        content_dict = prepare_content_dict(row)
        save_content_ts(content_dict, row)

        # create index
        generate_index_html(row)

        # create user input assets
        sheet_id = "1Q4hPxIz-uUGx08Jwvd6Jt22-ulkPA2Yc-j5BP7uPS8A"
        # TODO: menu sheet
        # custom configuration
        # TODO: check if a sheet exists, if not create one from template (using minority languages)
        #  and read it for the menu. If one exists then use it.
        # sheet_id = create_customer_menu_sheet(row)

        # download menu inputs
        menu = download_google_sheet(sheet_id)
        save_menu_ts(menu, row)

        # generate remaining assets from templates
        move_app_data(row)
        apply_substitutions(row)
        generate_header_file(row)

        # create repo and build deploy container container
        build_and_ship(row, create_repo, ship_image)


    def orchestrate_website_generation(self):
        if self.recreate_places:
            create_municipios_table()

        municipios = load_municipios_table()

        municipio = municipios.iloc[self.municipio_id]['municipio']
        provincia = municipios.iloc[self.municipio_id]['provincia']
        municipio_id = municipios.iloc[self.municipio_id]['municipio_id']

        if self.recreate_restaurants:
            if self.place_id:
                municipio_path = query_place( self.place_id, municipio_id)
            else:
                municipio_path = query_municipio(municipio_id)
        else:
            municipio_path = get_restaurant_path(municipio_id, municipio, provincia)

        df = pd.read_csv(municipio_path)
        df["email"] = "reservas@gastronom.io"
        df = df.fillna("")

        if  self.place_id:
            df = df.loc[df["place_id"] ==  self.place_id]

        if len(df) == 0:
            print("\n\n\nNo such place_id in municipio_id!!")

        for _, row in df.iterrows():
            self.generate_for_place(row, self.create_repo, self.ship_image)




def main():
    parser = argparse.ArgumentParser(description="Run website orchestration tasks")

    parser.add_argument(
        "--mun", type=int, default=None,
        help="ID of the municipio (default: 1132)"
    )
    parser.add_argument(
        "--place", type=str, default=None,
        help="Optional place ID (default: None)"
    )

    args = parser.parse_args()


    # Use parsed args
    municipio_id = args.mun
    place_id = args.place
    recreate_places = False
    recreate_restaurants = True
    create_repo = True
    ship_image = True
    update_status = False

    # Call your functions
    website_generator = WebsiteGenerator(
        municipio_id, place_id, recreate_places, recreate_restaurants, create_repo, ship_image, update_status
    )
    website_generator.orchestrate_website_generation()

    if update_status:
        create_services_overview()
        check_deployed_services()
        update_readme()

    scrape_customer_data(municipio_id, True)


    # TODO: create a form to upload images, menus etc.
    #  redo the municipios from wiki with min_lang place names

    # TODO: fix text translation new model?
    # TODO: add automatic translations to the content injector



if __name__ == "__main__":
    main()
