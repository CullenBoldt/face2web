import os

from libs.utils.paths import get_cid_repo_name, get_cid_yaml_path, get_app_path


def build_and_ship(row, create_repo, ship_image):
    system_command = f"/home/cullen/google-cloud-sdk/bin/gcloud config set project cellular-nuance-468913-d5"
    os.system(system_command)

    if create_repo:
        system_command = f'/home/cullen/google-cloud-sdk/bin/gcloud artifacts repositories create {get_cid_repo_name(row)} --repository-format=docker --location=europe-west1 --description="Name: {row["name"]}, place_id: {row['place_id']}"'
        os.system(system_command)

    if ship_image:
        system_command = f"/home/cullen/google-cloud-sdk/bin/gcloud builds submit --config {get_cid_yaml_path(row)} {get_app_path(row)}"
        os.system(system_command)
