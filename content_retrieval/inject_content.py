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
    min_lang = row['min_lang']

    embed_url = f"https://www.google.com/maps/embed/v1/place?key={embed_map_key()}&q=place_id:{row['place_id']}"

    content_dict = {
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
                "paragraph2": f"Ubicado en {row['municipio']}, {row['provincia']}, nuestro restaurante es un lugar de encuentro para amigos y familias. Cada plato está preparado con esmero, utilizando recetas que han pasado de generación en generación, asegurando una comida casera y memorable.",
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
                "paragraph2": f"Located in the {row['municipio']}, {row['provincia']}, our restaurant is a meeting place for friends and families. Each dish is prepared with care, using recipes passed down from generation to generation, ensuring a homemade and memorable meal.",
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
                "embed_url": embed_url
            },
            "footer": {
                "copyright": "© 2025 gastronom.io - All rights reserved.",
            },
        },
    }

    if min_lang == "gl":
        content_dict = {"gl": {
                                "header": {
                                    "logo": row["name"],
                                    "nav": {
                                        "home": "Inicio",
                                        "menu": "Menú",
                                        "about": "Sobre nós",
                                        "contact": "Contacto",
                                    },
                                },
                                "hero": {
                                    "title": f"Sabor tradicional no corazón de {row['municipio']}",
                                    "subtitle": "Descubre a auténtica cociña galega.",
                                    "image": get_bucket_image_path(row, "1"),
                                    "cta": "Reservar mesa",
                                },
                                "menu": {
                                    "title": "O noso Menú",
                                    "categories": {
                                        "all": "Todos",
                                        "appetizers": "Petiscos",
                                        "mainCourses": "Pratos principais",
                                        "desserts": "Sobremesas",
                                        "drinks": "Bebidas",
                                    },
                                },
                                "about": {
                                    "title": "A nosa historia",
                                    "image": get_bucket_image_path(row, "2"),
                                    "paragraph1": f"En {row['name']}, estamos orgullosos de ofrecer unha experiencia culinaria baseada na tradición e nos produtos da nosa terra. Somos un negocio familiar dedicado a traer os sabores auténticos da cociña galega á súa mesa.",
                                    "paragraph2": f"Situado en {row['municipio']}, {row['provincia']}, o noso restaurante é un punto de encontro para amigos e familias. Cada prato está preparado con coidado, seguindo receitas transmitidas de xeración en xeración, garantindo unha comida caseira e inesquecible.",
                                },
                                "contact": {
                                    "title": "Ponte en contacto",
                                    "address": "Enderezo",
                                    "addressValue": f"{row['adr_street_address']}, {row['adr_postal_code']} {row['adr_locality']} {row['adr_region']}",
                                    "openingHours": "Horario de apertura",
                                    "hours": {
                                        "lunes": f"Luns: {row['opening_hours_lunes']}",
                                        "martes": f"Martes: {row['opening_hours_martes']}",
                                        "miercoles": f"Mércores: {row['opening_hours_miércoles']}",
                                        "jueves": f"Xoves: {row['opening_hours_jueves']}",
                                        "viernes": f"Venres: {row['opening_hours_viernes']}",
                                        "sabado": f"Sábado: {row['opening_hours_sábado']}",
                                        "domingo": f"Domingo: {row['opening_hours_domingo']}",
                                    },
                                    "phone": "Teléfono",
                                    "phoneValue": row["formatted_phone_number"],
                                    "whatsappNumber": row["formatted_phone_number"],
                                    "email": "Correo electrónico",
                                    "emailValue": row["email"],
                                    "reservation": {
                                        "title": "Facer unha reserva",
                                        "submit": "Reservar por WhatsApp",
                                        "whatsappMessage": f"Ola, gustaríame facer unha reserva en {row['name']}.",
                                    },
                                    "embed_url": embed_url
                                },
                                "footer": {
                                    "copyright": f"© 2024 {row['name']}. Todos os dereitos reservados.",
                                },
                            },
                            } | content_dict
    elif min_lang == "ca":
        content_dict = {"ca": {
                                "header": {
                                    "logo": row["name"],
                                    "nav": {
                                        "home": "Inici",
                                        "menu": "Menú",
                                        "about": "Sobre nosaltres",
                                        "contact": "Contacte",
                                    },
                                },
                                "hero": {
                                    "title": f"Sabors tradicionals al cor de {row['municipio']}",
                                    "subtitle": "Descobreix la cuina autèntica.",
                                    "image": get_bucket_image_path(row, "1"),
                                    "cta": "Reservar taula",
                                },
                                "menu": {
                                    "title": "El nostre Menú",
                                    "categories": {
                                        "all": "Tots",
                                        "appetizers": "Aperitius",
                                        "mainCourses": "Plats principals",
                                        "desserts": "Postres",
                                        "drinks": "Begudes",
                                    },
                                },
                                "about": {
                                    "title": "La nostra història",
                                    "image": get_bucket_image_path(row, "2"),
                                    "paragraph1": f"A {row['name']}, estem orgullosos d’oferir una experiència culinària basada en la tradició i els productes de la nostra terra. Som un negoci familiar dedicat a portar els sabors autèntics de la cuina castellana a la vostra taula.",
                                    "paragraph2": f"Situat a {row['municipio']}, {row['provincia']}, el nostre restaurant és un punt de trobada per a amics i famílies. Cada plat està preparat amb cura, seguint receptes que han passat de generació en generació, garantint un menjar casolà i memorable.",
                                },
                                "contact": {
                                    "title": "Posa’t en contacte",
                                    "address": "Adreça",
                                    "addressValue": f"{row['adr_street_address']}, {row['adr_postal_code']} {row['adr_locality']} {row['adr_region']}",
                                    "openingHours": "Horari d’obertura",
                                    "hours": {
                                        "lunes": f"Dilluns: {row['opening_hours_lunes']}",
                                        "martes": f"Dimarts: {row['opening_hours_martes']}",
                                        "miercoles": f"Dimecres: {row['opening_hours_miércoles']}",
                                        "jueves": f"Dijous: {row['opening_hours_jueves']}",
                                        "viernes": f"Divendres: {row['opening_hours_viernes']}",
                                        "sabado": f"Dissabte: {row['opening_hours_sábado']}",
                                        "domingo": f"Diumenge: {row['opening_hours_domingo']}",
                                    },
                                    "phone": "Telèfon",
                                    "phoneValue": row["formatted_phone_number"],
                                    "whatsappNumber": row["formatted_phone_number"],
                                    "email": "Correu electrònic",
                                    "emailValue": row["email"],
                                    "reservation": {
                                        "title": "Fer una reserva",
                                        "submit": "Reservar per WhatsApp",
                                        "whatsappMessage": f"Hola, m’agradaria fer una reserva a {row['name']}.",
                                    },
                                    "embed_url": embed_url
                                },
                                "footer": {
                                    "copyright": f"© 2024 {row['name']}. Tots els drets reservats.",
                                },
                            },
                            }  | content_dict

    elif min_lang == "eu":
        content_dict = {"eu": {
                                "header": {
                                    "logo": row["name"],
                                    "nav": {
                                        "home": "Hasiera",
                                        "menu": "Menua",
                                        "about": "Guri buruz",
                                        "contact": "Kontaktua",
                                    },
                                },
                                "hero": {
                                    "title": f"{row['municipio']}-ko bihotzean tradiziozko zaporeak",
                                    "subtitle": "Deskubritu benetako sukaldaritza.",
                                    "image": get_bucket_image_path(row, "1"),
                                    "cta": "Mahai bat erreserbatu",
                                },
                                "menu": {
                                    "title": "Gure Menua",
                                    "categories": {
                                        "all": "Guztiak",
                                        "appetizers": "Aperitiboak",
                                        "mainCourses": "Plater nagusiak",
                                        "desserts": "Postreak",
                                        "drinks": "Edariak",
                                    },
                                },
                                "about": {
                                    "title": "Gure istorioa",
                                    "image": get_bucket_image_path(row, "2"),
                                    "paragraph1": f"{row['name']}-en, harro gaude gure lurraldeko produktu eta tradizioetan oinarritutako sukaldaritza-esperientzia eskaintzeaz. Familia-enpresa bat gara, eta gure helburua sukaldaritza autentikoaren zaporeak mahaira eramatea da.",
                                    "paragraph2": f"{row['municipio']}, {row['provincia']}-n kokatuta, gure jatetxea lagun eta familientzako elkargune bat da. Plater bakoitza arreta handiz prestatzen da, belaunaldiz belaunaldi transmititutako errezetak jarraituz, etxeko eta ahaztezina den bazkari bat bermatuz.",
                                },
                                "contact": {
                                    "title": "Jarri gurekin harremanetan",
                                    "address": "Helbidea",
                                    "addressValue": f"{row['adr_street_address']}, {row['adr_postal_code']} {row['adr_locality']} {row['adr_region']}",
                                    "openingHours": "Ordutegia",
                                    "hours": {
                                        "lunes": f"Astelehena: {row['opening_hours_lunes']}",
                                        "martes": f"Asteartea: {row['opening_hours_martes']}",
                                        "miercoles": f"Asteazkena: {row['opening_hours_miércoles']}",
                                        "jueves": f"Osteguna: {row['opening_hours_jueves']}",
                                        "viernes": f"Ostirala: {row['opening_hours_viernes']}",
                                        "sabado": f"Larunbata: {row['opening_hours_sábado']}",
                                        "domingo": f"Igandea: {row['opening_hours_domingo']}",
                                    },
                                    "phone": "Telefonoa",
                                    "phoneValue": row["formatted_phone_number"],
                                    "whatsappNumber": row["formatted_phone_number"],
                                    "email": "Posta elektronikoa",
                                    "emailValue": row["email"],
                                    "reservation": {
                                        "title": "Erreserba egin",
                                        "submit": "WhatsApp bidez erreserbatu",
                                        "whatsappMessage": f"Kaixo, {row['name']}-en erreserba bat egin nahi nuke.",
                                    },
                                    "embed_url": embed_url
                                },
                                "footer": {
                                    "copyright": f"© 2024 {row['name']}. Eskubide guztiak erreserbatuta.",
                                },
                            },
                            }  | content_dict


    return content_dict

def main():
    df = pd.read_csv("../data/restaurants/2000_Menasalbas_Toledo.csv")
    df["email"] = "reservas@gastronom.io"

    for index, row in df.iterrows():
        content_dict = prepare_content_dict(row)
        output_path = Path(f"data/web_content/{row['cid']}/data")
        save_content_ts(content_dict, output_path)


if __name__ == "__main__":
    main()
