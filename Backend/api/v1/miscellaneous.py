from fastapi import APIRouter
from schemas import SendEmailModel
from models import Email, User
from database import session
from models import encr_decr

router = APIRouter()


@router.post('/sendCodeEmail',
             tags=['miscellaneous'],
             summary='Send verification email',
             response_model=str,
             response_description='Code to verify the email')
async def sendCodeEmail(email_model: SendEmailModel):
    email: Email = Email(email_model)
    template : str = email.create_template_verification()
    email.send_email(template, 'Código de Verificación Secret Love', 'Code Verification Secret Love')
    return email.code

@router.post('/sendPasswordEmail',
             tags=['miscellaneous'],
             summary='Send Password in a email',
             response_model=bool,
             response_description='True if it\'s sended')
async def sendPasswordEmail(email_model : SendEmailModel) :
    try :
        email: Email = Email(email_model)
        template : str = email.create_template_password()
        email.send_email(template, 'Restablecer contraseña Secret Love', 'Reset Password Secret Love')
        password_encrypt: str = encr_decr.encrypt(email.new_pasword)
        session.query(User).filter(User.email == email_model.to_email).update({"password" : password_encrypt})
        session.commit()
        session.close()
        return True
    except :
        return False    
