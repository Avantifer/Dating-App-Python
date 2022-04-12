from fastapi import APIRouter
from schemas import SendEmailModel
from models import Email

router = APIRouter()


@router.post('/sendCodeEmail',
             tags=['miscellaneous'],
             response_model=str,
             response_description='Code to verify the email')
async def sendCodeEmail(email_model: SendEmailModel):
    email: Email = Email(email_model)
    template : str = email.create_template()
    email.send_email(template)
    return email.code
