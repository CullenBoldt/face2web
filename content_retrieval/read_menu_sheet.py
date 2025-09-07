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
    Expected columns: Categoria, Nombre_es, Descripcion_es, Nombre_en, Descripcion_en, Precio
    """

    # Map Spanish category names to nice comments
    category_comments = {
        "Entrante": "// Appetizers",
        "Principales": "// Main Courses",
        "Postres": "// Desserts",
        "Bebidas": "// Drinks",
    }

    # Build the menu items grouped by category
    output_lines = [
        "import { MenuItem } from '../types';",
        "",
        "export const menuData: MenuItem[] = ["
    ]

    # Ensure stable grouping order
    for categoria, group in df.groupby("Categoria", sort=False):
        if categoria in category_comments:
            output_lines.append(f"  {category_comments[categoria]}")
        for _, row in group.iterrows():
            item = f"""  {{
                    name: {{
                      es: "{row['Nombre_es']}",
                      en: "{row['Nombre_en']}"
                    }},
                    description: {{
                      es: "{row['Descripcion_es']}",
                      en: "{row['Descripcion_en']}"
                    }},
                    price: "€{row['Precio']}",
                    category: "{categoria}",
                    allergens: "{row['Alergenos']}",
                  }},"""
            output_lines.append(item)

    output_lines.append("];\n")

    # Write to file
    municipio_id, cid = get_ids_from_row(cid_row)

    with open(get_cid_menu_path(municipio_id, cid), "w", encoding="utf-8") as f:
        f.write("\n".join(output_lines))

    print(f"✅ Saved menu data to {get_cid_menu_path(municipio_id, cid)}")




