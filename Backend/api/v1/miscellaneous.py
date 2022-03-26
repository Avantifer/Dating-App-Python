from fastapi import APIRouter
from email.mime.image import MIMEImage
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.message import EmailMessage
import smtplib, ssl
import random
from schemas import SendEmailModel

router = APIRouter()

@router.post('/sendCodeEmail',
             tags=['miscellaneous'],
             response_model = str,
             response_description = 'Code to verify the email')
async def sendCodeEmail(email_model : SendEmailModel):    
    code = str(random.randint(111111, 999999))
     
    if email_model.lang == 'en' :
        html = """\
        <html>
            <body style="padding: 3rem 0;background-color:#f1f0f0;">
                <div style="background-color:white;padding: 3rem 4rem;width: 40%;margin: auto;font-size: 1rem;">
                    <center>
                        <img style="width: 100px;" src="cid:logo_image" />
                    </center>
                    <strong style="font-size:2.25rem;">Verify This Email Address</strong>
                    <p>Welcome to Secret Love!</p>
                    <strong style="font-size: 2rem;">{}</strong>
                    <p>If you did not sign up to Secret Love, please ignore this email or contact us at ferenandoruiz@gmail.com</p>
                    <br>
                    <p>Fernando Ruiz</p>
                    <p>Secret Love Support Team</p>
                </div>
            </body>
        </html>
    """.format(code)
    elif email_model.lang == 'es' :
        html = """\
        <html>
            <body style="padding: 3rem 0;background-color:#f1f0f0;">
                <div style="background-color:white;padding: 3rem 4rem;width: 40%;margin: auto;font-size: 1rem;">
                    <center>
                        <img style="width: 100px;" src="cid:logo_image" />
                    </center>
                    <strong style="font-size:2.25rem;">Confirma Tu Correo</strong>
                    <p>¡Bienvenido a Secret Love!</p>
                    <strong style="font-size: 2rem;">{}</strong>
                    <p>Si no te has registrado a Secret Love, por favor ignora este email o contáctanos a ferenandoruiz@gmail.com</p>
                    <br>
                    <p>Fernando Ruiz</p>
                    <p>Equipo de Soporte de Secret Love</p>
                </div>
            </body>
        </html>
    """.format(code)
    
    with open('../DatingApp/src/assets/icons/logo.png', 'rb') as img:
        logo_img = MIMEImage(img.read())
        logo_img.add_header('Content-ID', '<logo_image>')
            
    format_message = MIMEMultipart()
    format_message.attach(MIMEText(html, "html"))
    format_message.attach(logo_img)
    
    msg = EmailMessage()
    msg['Subject'] = 'Code Verification Secret Love'
    msg['From'] = 'ferenandoruiz@gmail.com'
    msg['To'] = email_model.to_email
    msg.set_content(format_message)
    
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=ssl.create_default_context()) as server:
        server.login("ferenandoruiz@gmail.com", 'xqbshapsblfrpdls')
        server.send_message(msg)
        
    return code
       