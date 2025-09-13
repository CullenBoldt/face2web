

import os
import pandas as pd

def update_csv_with_new_keys(df: pd.DataFrame, csv_path: str, key: str):
    """
    Updates a CSV with all unique values from df[key] that are not already in the CSV.
    If the CSV doesn't exist, it creates it.

    Parameters:
    - df (pd.DataFrame): Input dataframe.
    - csv_path (str): Path to the CSV file.
    - key (str): Column name in df to extract unique values from.
    """
    # Ensure the key exists in df
    if key not in df.columns:
        raise ValueError(f"Column '{key}' not found in DataFrame.")

    new_values = set(df[key].dropna().unique())

    if os.path.exists(csv_path):
        # Load existing CSV
        existing_df = pd.read_csv(csv_path)
        if key not in existing_df.columns:
            raise ValueError(f"Column '{key}' not found in existing CSV.")

        existing_values = set(existing_df[key].dropna().unique())
        # Find values not already in CSV
        missing_values = new_values - existing_values

        if missing_values:
            # Append new values
            updated_df = pd.concat([existing_df, pd.DataFrame({key: list(missing_values)})], ignore_index=True)
            updated_df.to_csv(csv_path, index=False)
    else:
        # Create new CSV with values
        pd.DataFrame({key: list(new_values)}).to_csv(csv_path, index=False)
