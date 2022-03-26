from pydantic import BaseModel

class SendEmailModel(BaseModel) :
    to_email : str
    lang: str