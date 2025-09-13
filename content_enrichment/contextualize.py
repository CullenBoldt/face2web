import time

from google import genai
from google.genai import types

from libs.utils.auth import read_gen_ai_api_key
import json

from libs.utils.paths import get_description_template_path


def serves_food(row):

    client = genai.Client(api_key=read_gen_ai_api_key())

    # Define a function with an enum parameter
    serves_food_function = {
        "name": "serves_food",
        "description": "Determine if the establishment serves food based on name, reviews, and google maps 'types'",
        "parameters": {
            "type": "object",
            "properties": {
                "serves_food": {
                    "type": "boolean",
                    "description": "Return True food is served otherwise False"
                }
            },
            "required": ["serves_food"]
        }
    }

    tool = types.Tool(function_declarations=[serves_food_function])
    config = types.GenerateContentConfig(tools=[tool])

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"Name: {row['name']},\n\n\n Reviews: {row['reviews']},\n\n\n Google maps place types: {row['types']}",
        config=config,
    )

    # Extract the structured response
    func_call = response.candidates[0].content.parts[0].function_call
    print(func_call.args)
    row['serves_food'] =  func_call.args['serves_food']
    time.sleep(1)
    return row

def place_class(row):

    client = genai.Client(api_key=read_gen_ai_api_key())

    # Define a function with an enum parameter
    place_class_function = {
        "name": "place_class",
        "description": "Determine the type of establishment based on name, reviews, and google maps 'types'",
        "parameters": {
            "type": "object",
            "properties": {
                "place_class": {
                    "type": "string",
                    "enum": ["bar", "cafe", "restaurant"],
                    "description": "Return the type of the restaurant"
                }
            },
            "required": ["place_class"]
        }
    }

    tool = types.Tool(function_declarations=[place_class_function])
    config = types.GenerateContentConfig(tools=[tool])

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"Name: {row['name']},\n\n\n Reviews: {row['reviews']},\n\n\n Google maps place types: {row['types']}",
        config=config,
    )

    # Extract the structured response
    func_call = response.candidates[0].content.parts[0].function_call
    print(func_call.args)
    row['place_class'] =  func_call.args['place_class']
    time.sleep(1)
    return row




def create_description(row):
    client = genai.Client(api_key=read_gen_ai_api_key())

    # Open and load the JSON file
    with open(get_description_template_path(row['place_class']), "r", encoding="utf-8") as f:
        description_template = json.load(f)['description_template']

    # Define a function schema
    description_function = {
        "name": "generate_description",
        "description": f"Generate a short description (from the perspective of the establishment)"
                       f" based on template below for a establishment with supplied characteristics "
                       f"(use only positive reviews). Don't make any outlandish claims. \n\n {description_template}",
        "parameters": {
            "type": "object",
            "properties": {
                "description": {
                    "type": "string",
                    "description": "The generated text description."
                }
            },
            "required": ["description"]
        }
    }

    tool = types.Tool(function_declarations=[description_function])
    config = types.GenerateContentConfig(tools=[tool])

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"Name: {row['name']},\n\n\n "
                 f"Location: {row['adr_locality']}, {row['adr_region']},\n\n\n "
                 f"Reviews: {row['reviews']},\n\n\n "
                 f"establishment type: {row['place_class']}, \n\n\n "
                 f"serves food: {row['serves_food']}",
        config=config,
    )

    func_call = response.candidates[0].content.parts[0].function_call
    print(func_call.args)  # -> {"description": "A welcoming café where..."}
    row['place_description'] =  {'en' : func_call.args['description']}
    time.sleep(1)
    return row

def translate_description(description, min_lang):

    language_map = {"es": "Espanol",
                    "ca": "Catalan",
                    "gl": "Gallego",
                    "eu": "Euskera"}


    client = genai.Client(api_key=read_gen_ai_api_key())

    # Define a function schema
    description_function = {
        "name": "generate_description",
        "description": f"Por Favor traduce la descripcion desde el Ingles a {language_map[min_lang]} utilizando vocabulario y lenguaje local.",
        "parameters": {
            "type": "object",
            "properties": {
                "description": {
                    "type": "string",
                    "description": "The translated text description."
                }
            },
            "required": ["description"]
        }
    }

    tool = types.Tool(function_declarations=[description_function])
    config = types.GenerateContentConfig(tools=[tool])

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=description,
        config=config,
    )

    func_call = response.candidates[0].content.parts[0].function_call
    print(func_call.args['description'])
    time.sleep(1)
    return func_call.args['description']



def contextualize(row):
    row = serves_food(row)
    row = place_class(row)
    row = create_description(row)


    row['place_description']['es'] = translate_description(row['place_description']['en'], "es")
    if row['min_lang'] in ['ca', "gl", "eu"]:
        row['place_description'][row['min_lang']] = translate_description(row['place_description']['en'], row['min_lang'])

    return row