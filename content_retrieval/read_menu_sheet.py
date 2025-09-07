import pandas as pd

from libs.utils.paths import get_cid_menu_path, get_ids_from_row


def download_google_sheet(sheet_id):
    sheet_name = "Sheet1"
    url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/gviz/tq?tqx=out:csv&sheet={sheet_name}"

    df = pd.read_csv(url)
    return df

def save_menu_ts(df: pd.DataFrame, cid_row):
    """
    Convert a DataFrame into a TypeScript file with MenuItem[] structure.
    Expected columns: Categoria, Nombre_es, Descripcion_es, Nombre_en, Descripcion_en, Precio, Alergenos
    min_lang: optional minority language code ("gl", "eu", "ca", or "none")
    """

    min_lang = cid_row['min_lang']

    if min_lang not in ["gl", "eu", "ca", "none"]:
        raise ValueError("min_lang must be one of 'gl', 'eu', 'ca', or 'none'")

    # Optional mapping for nicer language labels (optional, can be expanded)
    lang_labels = {
        "gl": "Galego",
        "eu": "Euskara",
        "ca": "Català",
    }

    # Map Spanish category names to nice comments
    category_comments = {
        "Entrante": "// Appetizers",
        "Principales": "// Main Courses",
        "Postres": "// Desserts",
        "Bebidas": "// Drinks",
    }

    category_mapping = {
        "Entrante": "appetizers",
        "Principales": "mainCourses",
        "Postres": "desserts",
        "Bebidas": "drinks"
    }

    output_lines = [
        "import { MenuItem } from '../types';",
        "",
        "export const menuData: MenuItem[] = ["
    ]

    # Stable grouping by category
    for categoria, group in df.groupby("Categoria", sort=False):
        if categoria in category_comments:
            output_lines.append(f"  {category_comments[categoria]}")
        for _, row in group.iterrows():
            # Base item structure
            name_lines = [
                f'  es: "{row["Nombre_es"]}",',
                f'  en: "{row["Nombre_en"]}",'
            ]
            desc_lines = [
                f'  es: "{row["Descripcion_es"]}",',
                f'  en: "{row["Descripcion_en"]}",'
            ]

            # Add minority language if provided
            if min_lang != "none":
                name_lines.append(f'  {min_lang}: "{row.get(f"Nombre_{min_lang}", "")}",')
                desc_lines.append(f'  {min_lang}: "{row.get(f"Descripcion_{min_lang}", "")}",')

            item = f"""  {{
                        name: {{
                          {chr(10).join(name_lines)}
                        }},
                        description: {{
                          {chr(10).join(desc_lines)}
                        }},
                        price: "€{row['Precio']}",
                        category: "{category_mapping[categoria]}",
                        allergens: "{row['Alergenos']}",
                      }},"""
            output_lines.append(item)

    output_lines.append("];\n")

    # Write to file
    municipio_id, cid = get_ids_from_row(cid_row)
    output_path = get_cid_menu_path(municipio_id, cid)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(output_lines))

    print(f"✅ Saved menu data to {output_path}")




