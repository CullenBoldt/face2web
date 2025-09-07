import glob
import os
import subprocess
import pandas as pd
import json

from libs.utils.paths import get_restaurants_dir, service_overview_path

pd.set_option('display.max_rows', 500)
pd.set_option('display.max_columns', 500)
pd.set_option('display.width', 1000)


def create_services_overview():

    # Run the gcloud command with JSON output
    result = subprocess.run(
        ["/home/cullen/google-cloud-sdk/bin/gcloud", "run", "services", "list",
         "--platform", "managed",
         "--region", "europe-west1",
         "--format=json"],
        capture_output=True,
        text=True
    )

    # Parse the JSON output
    services = json.loads(result.stdout)

    # Convert to Pandas DataFrame
    services_df = pd.DataFrame(services)

    # Optional: show only relevant columns (name and URL)
    if 'status' in services_df.columns and 'url' in services_df['status'].iloc[0]:
        services_df['url'] = services_df['status'].apply(lambda x: x.get('url'))

    if 'metadata' in services_df.columns and 'name' in services_df['metadata'].iloc[0]:
        services_df['name'] = services_df['metadata'].apply(lambda x: x.get('name'))
        services_df['cid'] = services_df['name']
    # Find all CSV files in the directory
    csv_files = glob.glob(os.path.join(get_restaurants_dir(), "*.csv"))

    # List to hold DataFrames
    dfs = []

    for file in csv_files:
        # Read CSV
        df = pd.read_csv(file, usecols=["place_id", "name", "cid"])
        dfs.append(df)

    # Concatenate all DataFrames into one
    combined_df = pd.concat(dfs, ignore_index=True)

    output_df = services_df[['cid', 'url']].merge(combined_df, on="cid")

    output_df.to_csv(service_overview_path())


def main():
    create_services_overview()

if __name__ == "__main__":
    main()