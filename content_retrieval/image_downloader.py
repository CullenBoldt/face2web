import ast
from pathlib import Path

import requests

from content_retrieval.query_places import read_api_key
from libs.utils.paths import get_cid_image_path, get_ids_from_row


def download_images(row, image_count):

    try:
        photos = ast.literal_eval(row.get("photos", "[]"))[:image_count]

    except:
        photos = []
    municipio_id, cid = get_ids_from_row(row)

    if photos:
        for idx, p in enumerate(photos, start=1):
            ref = p.get("photo_reference")
            if ref:
                url = f"https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference={ref}&key={read_api_key()}"

                local_file = get_cid_image_path(municipio_id, cid, idx)

                # Download image if not already present
                if not local_file.exists():
                    try:
                        resp = requests.get(url, timeout=10)
                        resp.raise_for_status()
                        with open(local_file, "wb") as f:
                            f.write(resp.content)
                    except Exception as e:
                        print(f"❌ Error descargando {url}: {e}")
                        continue
