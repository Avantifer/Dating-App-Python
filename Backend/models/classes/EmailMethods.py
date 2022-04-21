from schemas import SendEmailModel
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from core.secret import password_email
import string, random, ssl, smtplib

class Email() :
    to_email : str
    lang: str
    domain: str
    code: str
    new_pasword: str
    
    def __init__(self, emailModel : SendEmailModel):
        self.to_email = emailModel.to_email
        self.lang = emailModel.lang
        self.domain = self.get_domain()
        self.code = self.create_code()
        self.new_pasword = self.create_password()
        
    def get_domain(self) :
        start: int = self.to_email.index('@') + 1
        end: int = self.to_email.index('.com') if self.to_email.__contains__('.com') else self.to_email.index('.es')
        return self.to_email[start:end]
    
    def is_gmail(self, domain : str) :
        return True if domain == 'gmail' else False
    
    def is_spanish(self) :
        return True if self.lang == 'es' else False
    
    def create_code(self) :
        return str(random.randint(111111, 999999))
    
    def create_password(self):
        return "".join(random.choices(string.ascii_letters + string.digits, k = 10))
    
    def create_template_verification(self) :
        html = """\
            <html>
                <body style="padding: 3rem 0;background-color:#f1f0f0;">
                    <div style="background-color:white;padding: 3rem 4rem;width: {width}%;margin: auto;font-size: 1rem;">
                        <center>
                            <strong style="font-size:2.25rem;">{title}</strong>
                        </center>
                        <center>
                            <img style="width: 100px;margin-top: 1rem;" src="https://lh3.googleusercontent.com/a-/AOh14GivJQ9mJ8yRL0Gy_YxXknfFGDj4BtkG4_qUJTs6=s300" />
                        </center>
                        <h3 style="margin:1rem 0;">{subtitle}</h3> 
                        <p>{info}</p>
                        <strong style="font-size: 2rem;">{code}</strong>
                        <p>{help}</p>
                        <br>
                        <p>{author}</p>
                        <p>{support}</p>
                    </div>
                </body>
            </html>
        """.format(
            width=40 if self.is_gmail(self.domain) else 50,
            title='Confirma tu Correo' if self.is_spanish() else 'Verify This Email Address',
            subtitle='¡Bienvenido a Secret Love!' if self.is_spanish() else 'Welcome to Secret Love!',
            info='Tienes que poner el siguiente código en la página:' if self.is_spanish() else 'You need to put the next code in the page:',
            code=self.code,
            help='Si no te has registrado a Secret Love, por favor ignora este email o contáctanos a ferenandoruiz@gmail.com' if self.is_spanish()
            else 'If you did not sign up to Secret Love, please ignore this email or contact us at ferenandoruiz@gmail.com',
            author='Fernando Ruiz',
            support='Equipo de Soporte de Secret Love' if self.is_spanish() else 'Secret Love Support Team'
            )
        return html 
    
    def create_template_password(self) :
        html = """\
            <html>
                <body style="padding: 3rem 0;background-color:#f1f0f0;">
                    <div style="background-color:white;padding: 3rem 4rem;width: {width}%;margin: auto;font-size: 1rem;">
                        <center>
                            <strong style="font-size:2.25rem;">{title}</strong>
                        </center>
                        <center>
                            <img style="width: 100px;margin-top: 1rem;" src="https://lh3.googleusercontent.com/a-/AOh14GivJQ9mJ8yRL0Gy_YxXknfFGDj4BtkG4_qUJTs6=s300" />
                        </center>
                        <p>{info}</p>
                        <strong style="font-size: 2rem;">{password}</strong>
                        <br>
                        <p>{author}</p>
                        <p>{support}</p>
                    </div>
                </body>
            </html>
        """.format(
            width=40 if self.is_gmail(self.domain) else 50,
            title='Restablecer contraseña ' if self.is_spanish() else 'Reset Password',
            info='Esta es tu nueva contraseña' if self.is_spanish() else 'This is your new password',
            password= self.new_pasword,
            author='Fernando Ruiz',
            support='Equipo de Soporte de Secret Love' if self.is_spanish() else 'Secret Love Support Team'
            )
        return html
    def send_email(self, html : str, subject_es: str, subject_en: str) :
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject_es if self.is_spanish() else subject_en
        msg.attach(MIMEText(html, 'html'))
        
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=ssl.create_default_context()) as server:
            server.login('ferenandoruiz@gmail.com', password_email)
            server.sendmail('ferenandoruiz@gmail.com', self.to_email, msg.as_string())