
from googleapiclient.discovery import build
from google.oauth2.service_account import Credentials


def create_customer_menu_sheet(row):
    # Path to service account key
    KEYFILEPATH = 'secrets/sheet-client-471314-d5cceb514e1e.json'

    # Scopes for Drive API
    SCOPES = ['https://www.googleapis.com/auth/drive']

    # Authenticate
    creds = Credentials.from_service_account_file(KEYFILEPATH, scopes=SCOPES)
    service = build('drive', 'v3', credentials=creds)

    # ID of the original Google Sheet
    original_file_id = '1Q4hPxIz-uUGx08Jwvd6Jt22-ulkPA2Yc-j5BP7uPS8A'

    # Metadata for the copied sheet
    copy_metadata = {
        'name': row['name']  # New sheet name
    }

    # Copy the sheet
    copied_file = service.files().copy(
        fileId=original_file_id,
        body=copy_metadata
    ).execute()

    return copied_file['id']