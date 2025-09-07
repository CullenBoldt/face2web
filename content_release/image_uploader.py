import os

from libs.utils.paths import get_ids_from_row, get_cid_image_dir

from google.cloud import storage

def upload_images(row, bucket_name="gastronomio_images", credentials_path="secrets/cellular-nuance-468913-d5-cd335058c8ea.json"):
    municipio_id, cid = get_ids_from_row(row)
    image_dir = get_cid_image_dir(municipio_id, cid)

    # Explicitly load credentials
    client = storage.Client.from_service_account_json(credentials_path)
    bucket = client.bucket(bucket_name)

    for filename in os.listdir(image_dir):
        file_path = os.path.join(image_dir, filename)
        if not os.path.isfile(file_path):
            continue

        blob_path = f"{municipio_id}/{cid}/{filename}"
        blob = bucket.blob(blob_path)
        blob.upload_from_filename(file_path)
        print(f"✅ Uploaded {file_path} to gs://{bucket_name}/{blob_path}")

