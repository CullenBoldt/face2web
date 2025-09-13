from libs.utils.paths import get_service_account_json

from googleapiclient.discovery import build
from google.oauth2.service_account import Credentials


def create_menu_sheet(categories, sheet_title="Menú de Productos"):
    """
    Creates a Google Sheet with columns:
    Categoria (dropdown), Nombre, Descripcion, Precio, Alergenos
    """
    # Scopes needed to create sheets and access them
    SCOPES = [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive'
    ]

    # Authenticate with service account
    creds = Credentials.from_service_account_file(get_service_account_json(), scopes=SCOPES)
    service = build('sheets', 'v4', credentials=creds)

    # 1️⃣ Create a new spreadsheet
    spreadsheet_body = {'properties': {'title': sheet_title}}
    spreadsheet = service.spreadsheets().create(body=spreadsheet_body).execute()
    spreadsheet_id = spreadsheet['spreadsheetId']
    print(f"Created spreadsheet: {sheet_title} (ID: {spreadsheet_id})")

    # 2️⃣ Set header row
    headers = [['Categoria', 'Nombre', 'Descripcion', 'Precio', 'Alergenos']]
    service.spreadsheets().values().update(
        spreadsheetId=spreadsheet_id,
        range='A1:E1',
        valueInputOption='RAW',
        body={'values': headers}
    ).execute()
    print("Header row set.")

    # 3️⃣ Add dropdown validation to 'Categoria' column
    requests = [{
        "setDataValidation": {
            "range": {
                "sheetId": 0,  # first (and only) sheet
                "startRowIndex": 1,  # row 2 (0-indexed)
                "endRowIndex": 100,  # adjust number of rows
                "startColumnIndex": 0,  # column A
                "endColumnIndex": 1
            },
            "rule": {
                "condition": {
                    "type": "ONE_OF_LIST",
                    "values": [{"userEnteredValue": cat} for cat in categories]
                },
                "showCustomUi": True,
                "strict": True
            }
        }
    }]

    service.spreadsheets().batchUpdate(
        spreadsheetId=spreadsheet_id,
        body={'requests': requests}
    ).execute()
    print("Dropdown validation added to 'Categoria' column.")

    return spreadsheet_id


# Usage example

categories = ['Entrantes', 'Principales', 'Postres', "Bebidas"]

sheet_id = create_menu_sheet(categories)
print(f"Spreadsheet ready! ID: {sheet_id}")

