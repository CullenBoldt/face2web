from libs.utils.paths import get_ids_from_row, get_index_path, get_themes_path

import json
import random


def get_theme(theme_name=None):
    """
    Select a theme by name, or randomly if not provided.
    Prints which theme was chosen.

    Args:
        theme_name (str): Name of the theme to force (optional).
        json_file (str): Path to the JSON file with themes.

    Returns:
        dict: The chosen theme colors.
    """
    with open(get_themes_path(), "r", encoding="utf-8") as f:
        themes = json.load(f)

    if theme_name:
        for theme in themes:
            if theme["name"].lower() == theme_name.lower():
                print(f"🎨 Using forced theme: {theme['name']}")
                return theme["colors"]
        raise ValueError(f"Theme '{theme_name}' not found. Available: {[t['name'] for t in themes]}")

    theme = random.choice(themes)
    print(f"🎨 Randomly chosen theme: {theme['name']}")
    return theme["colors"]


def generate_index_html(
    row):
    """
    Generate an index.html file with customizable Tailwind color settings.

    """
    colors = get_theme()

    html_content = f"""<!DOCTYPE html>
                    <html lang="en">
                      <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Gastronom.io</title>
                        <script src="https://cdn.tailwindcss.com"></script>
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
                        <script>
                          tailwind.config = {{
                            theme: {{
                              extend: {{
                                fontFamily: {{
                                  'serif': ['"Playfair Display"', 'serif'],
                                  'sans': ['Lato', 'sans-serif'],
                                }},
                                colors: {{
                                  'background': '{colors['background']}',
                                  'primary': '{colors['primary']}',
                                  'secondary': '{colors['secondary']}',
                                  'accent': '{colors['accent']}',
                                  'accent-hover': '{colors['accent-hover']}',
                                }}
                              }}
                            }}
                          }}
                        </script>
                        <script type="importmap">
                    {{
                      "imports": {{
                        "react/": "https://aistudiocdn.com/react@^19.1.1/",
                        "react": "https://aistudiocdn.com/react@^19.1.1",
                        "react-dom/": "https://aistudiocdn.com/react-dom@^19.1.1/"
                      }}
                    }}
                    </script>
                      </head>
                      <body class="bg-background text-primary font-sans">
                        <div id="root"></div>
                        <script type="module" src="/index.tsx"></script>
                      </body>
                    </html>"""

    municipio_id, cid =  get_ids_from_row(row)
    with open(get_index_path(municipio_id, cid), "w", encoding="utf-8") as f:
        f.write(html_content)

    print(f"✅ index.html generated at {get_index_path(municipio_id, cid)}")
