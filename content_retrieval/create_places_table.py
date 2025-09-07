import os
import pandas as pd
from pathlib import Path

from libs.utils.paths import get_places_raw_dir, get_places_table_path


def create_places_table():

    # Directory containing CSVs
    input_dir = get_places_raw_dir()

    all_dfs = []

    for file in input_dir.glob("*.csv"):
        try:
            # Read CSV
            df = pd.read_csv(file)

            # Extract base filename (without extension)
            provincia_name = file.stem.replace("_", " ")

            if len(df.columns) > 2:
                print(file)
                print(len(df.columns))

            # If Island column exists, prepend its value
            if "Island" in df.columns:
                df["provincia"] = df["Island"].astype(str) + ", " + provincia_name
            else:
                df["provincia"] = provincia_name

            all_dfs.append(df)
            print(f"✅ Loaded {file.name}")

        except Exception as e:
            print(f"❌ Error loading {file.name}: {e}")

    # Concatenate all into one DataFrame
    if all_dfs:
        combined_df = pd.concat(all_dfs, ignore_index=True)

        combined_df["Name"] = combined_df["Name"].str.replace('/', " ")

        print(combined_df['Population'].sum())

        combined_df[["Name", "provincia", "Population"]].rename({"Name":"municipio", "Population": "poblacion"}, axis=1).sort_values(by='poblacion', ascending =False).reset_index(drop=True).to_csv(get_places_table_path(), index_label="municipio_id")
        print(f"\n📊 Combined DataFrame shape: {combined_df.shape}")
    else:
        print("⚠️ No CSV files found in places/raw")


def load_places_table():
    return pd.read_csv(get_places_table_path())


def main():
    create_places_table()

if __name__ == "__main__":
    main()