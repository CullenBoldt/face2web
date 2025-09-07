
import yaml

from libs.utils.paths import get_cid_yaml_path, get_cid_display_name, get_cid_repo_name


def apply_substitutions(row) -> None:
    """
    Replace placeholders in a YAML file with given substitutions and write result to a new file.

    Args:
        input_file (str): Path to the source YAML file with placeholders.
        output_file (str): Path where the updated YAML will be written.
        substitutions (dict): Mapping of placeholder -> replacement value.
    """

    new_subs = {
        "_SERVICE_NAME": get_cid_display_name(row),
        "_REPOSITORY": get_cid_repo_name(row),
        "_REGION": "europe-west1",
        "_SHORT_SHA": "latest",
    }

    yaml_path = get_cid_yaml_path(row)
    with open(yaml_path, "r") as f:
        data = yaml.safe_load(f)

    # Ensure substitutions block exists
    if "substitutions" not in data:
        data["substitutions"] = {}

    # Update substitutions with provided values
    data["substitutions"].update(new_subs)

    # Write updated YAML
    with open(yaml_path, "w") as f:
        yaml.dump(data, f, sort_keys=False)


    print(f"✅ Substitutions applied. Output written to {yaml_path}")
