import json
from pathlib import Path

import pandas as pd
import re

from libs.utils.auth import embed_map_key
from libs.utils.paths import get_cid_content_path, get_ids_from_row, get_bucket_image_path


def dict_to_ts(obj, indent=0):
    """
    Convert Python dict to TypeScript object literal string without quotes on keys
    (unless the key contains special characters).
    """
    spacing = "  " * indent
    if isinstance(obj, dict):
        items = []
        for k, v in obj.items():
            # Keep quotes if key contains non-identifier chars
            if re.match(r"^[A-Za-z_][A-Za-z0-9_]*$", str(k)):
                key = str(k)
            else:
                key = json.dumps(k, ensure_ascii=False)
            items.append(f"{spacing}  {key}: {dict_to_ts(v, indent + 1)}")
        return "{\n" + ",\n".join(items) + f"\n{spacing}" + "}"
    elif isinstance(obj, list):
        items = [dict_to_ts(v, indent + 1) for v in obj]
        return "[ " + ", ".join(items) + " ]"
    elif isinstance(obj, str):
        return json.dumps(obj, ensure_ascii=False)
    elif obj is True:
        return "true"
    elif obj is False:
        return "false"
    elif obj is None:
        return "null"
    else:
        return str(obj)


def save_content_ts(content_dict: dict, row):
    """
    Takes a dictionary of translations and saves it as a TypeScript file.
    """
    ts_content = dict_to_ts(content_dict, indent=0)

    output = (
        "import { Content, Language } from '../types';\n\n"
        "export const content: { [key in Language]: Content } = "
        f"{ts_content};\n"
    )
    municipio_id, cid = get_ids_from_row(row)
    with open(get_cid_content_path(municipio_id, cid), "w", encoding="utf-8") as f:
        f.write(output)

    print(f"✅ Saved content to {get_cid_content_path(municipio_id, cid)}")


def prepare_content_dict(row):

    embed_url = f"https://www.google.com/maps/embed/v1/place?key={embed_map_key()}&q=place_id:{row['place_id']}"

    return {
        "es": {
            "header": {
                "logo": row["name"],
                "nav": {
                    "home": "Inicio",
                    "menu": "Menú",
                    "about": "Sobre Nosotros",
                    "contact": "Contacto",
                },
            },
            "hero": {
                "title": f"Sabor Tradicional en el Corazón de {row['municipio']}",
                "subtitle": "Descubre la auténtica cocina.",
                "image": get_bucket_image_path(row, "1"),
                "cta": "Reservar Mesa",
            },
            "menu": {
                "title": "Nuestro Menú",
                "categories": {
                    "all": "Todos",
                    "appetizers": "Entrantes",
                    "mainCourses": "Principales",
                    "desserts": "Postres",
                    "drinks": "Bebidas",
                },
            },
            "about": {
                "title": "Nuestra Historia",
                "image": get_bucket_image_path(row, "2"),
                "paragraph1": f"En {row['name']}, nos enorgullece ofrecer una experiencia culinaria basada en la tradición y los productos de nuestra tierra. Somos un negocio familiar dedicado a traer los sabores auténticos de la cocina castellana a su mesa.",
                "paragraph2": f"Ubicado en {row['municipio']}, {row['provencia']}, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable.",
            },
            "contact": {
                "title": "Ponte en Contacto",
                "address": "Dirección",
                "addressValue": f"{row['adr_street_address']}, {row['adr_postal_code']} {row['adr_locality']} {row['adr_region']}",
                "openingHours": "Horario de Apertura",
                "hours": {
                    "lunes": f"Lunes: {row['opening_hours_lunes']}",
                    "martes": f"Martes: {row['opening_hours_martes']}",
                    "miercoles": f"Miercoles: {row['opening_hours_miércoles']}",
                    "jueves": f"Jueves: {row['opening_hours_jueves']}",
                    "viernes": f"Viernes: {row['opening_hours_viernes']}",
                    "sabado": f"Sabado: {row['opening_hours_sábado']}",
                    "domingo": f"Domingo: {row['opening_hours_domingo']}",
                },
                "phone": "Teléfono",
                "phoneValue": row["formatted_phone_number"],
                "whatsappNumber": row["formatted_phone_number"],
                "email": "Correo Electrónico",
                "emailValue": row["email"],
                "reservation": {
                    "title": "Hacer una Reserva",
                    "submit": "Reservar por WhatsApp",
                    "whatsappMessage": f"Hola, me gustaría hacer una reserva en {row['name']}.",
                },
                "embed_url": embed_url
            },
            "footer": {
                "copyright": f"© 2024 {row['name']}. Todos los derechos reservados.",
            },
        },
        "en": {
            "header": {
                "logo": row["name"],
                "nav": {
                    "home": "Home",
                    "menu": "Menu",
                    "about": "About Us",
                    "contact": "Contact",
                },
            },
            "hero": {
                "title": f"Traditional Flavor in the Heart of {row['municipio']}",
                "subtitle": "Discover authentic Castilian cuisine.",
                "image": get_bucket_image_path(row, "1"),
                "cta": "Book a Table",
            },
            "menu": {
                "title": "Our Menu",
                "categories": {
                    "all": "All",
                    "appetizers": "Appetizers",
                    "mainCourses": "Main Courses",
                    "desserts": "Desserts",
                    "drinks": "Drinks",
                },
            },
            "about": {
                "title": "Our Story",
                "image": get_bucket_image_path(row, "2"),
                "paragraph1": f"At {row['name']}, we pride ourselves on offering a culinary experience based on tradition and local products. We are a family business dedicated to bringing the authentic flavors of Castilian cuisine to your table.",
                "paragraph2": f"Located in the {row['municipio']}, {row['provencia']}, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal.",
            },
            "contact": {
                "title": "Get in Touch",
                "address": "Address",
                "addressValue": f"{row['adr_street_address']}, {row['adr_postal_code']} {row['adr_locality']} {row['adr_region']}",
                "openingHours": "Opening Hours",
                "hours": {
                    "lunes": f"Monday: {str(row['opening_hours_lunes']).replace('Cerrado', 'Closed')}",
                    "martes": f"Tuesday: {str(row['opening_hours_martes']).replace('Cerrado', 'Closed')}",
                    "miercoles": f"Wednesday: {str(row['opening_hours_miércoles']).replace('Cerrado', 'Closed')}",
                    "jueves": f"Thursday: {str(row['opening_hours_jueves']).replace('Cerrado', 'Closed')}",
                    "viernes": f"Friday: {str(row['opening_hours_viernes']).replace('Cerrado', 'Closed')}",
                    "sabado": f"Saturday: {str(row['opening_hours_sábado']).replace('Cerrado', 'Closed')}",
                    "domingo": f"Sunday: {str(row['opening_hours_domingo']).replace('Cerrado', 'Closed')}",
                },
                "phone": "Phone",
                "phoneValue": row["formatted_phone_number"],
                "whatsappNumber": row["formatted_phone_number"],
                "email": "Email",
                "emailValue": row["email"],
                "reservation": {
                    "title": "Make a Reservation",
                    "submit": "Book via WhatsApp",
                    "whatsappMessage": f"Hello, I would like to make a reservation at {row['name']}.",
                },
                "embed_url" : embed_url
            },
            "footer": {
                "copyright": "© 2025 gastronom.io - All rights reserved.",
            },
        },
    }


def main():
    df = pd.read_csv("../data/restaurants/2000_Menasalbas_Toledo.csv")
    df["email"] = "reservas@gastronom.io"

    for index, row in df.iterrows():
        content_dict = prepare_content_dict(row)
        output_path = Path(f"data/web_content/{row['cid']}/data")
        save_content_ts(content_dict, output_path)


if __name__ == "__main__":
    main()
