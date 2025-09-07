import shutil

from libs.utils.paths import get_ids_from_row, get_cid_output_dir, get_template_app_dir


def move_app_data(row):
    municipio_id, cid = get_ids_from_row(row)
    shutil.copytree(get_template_app_dir(), get_cid_output_dir(municipio_id, cid), dirs_exist_ok=True)
