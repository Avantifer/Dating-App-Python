from fastapi.param_functions import Security
import jwt
from fastapi import HTTPException
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from passlib.context import CryptContext
from datetime import datetime, timedelta
from secret import secret_jwt

class AuthHandler():
    security = HTTPBearer()
    pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')
    secret = secret_jwt

    def encode_token(self, id):
        payload = {
            'exp': datetime.utcnow() + timedelta(weeks=1),
            'iat': datetime.utcnow(),
            'sub': {
                'id': id
            }
        }
        return jwt.encode(payload, self.secret, algorithm='HS256')

    def decode_token(self, token):
        try:
            payload = jwt.decode(token, self.secret, algorithms=['HS256'])
            return payload['sub']
        except jwt.ExpiredSignatureError:
            raise HTTPException(
                status_code=401, detail='La sesión ha caducado')
        except jwt.InvalidTokenError:
            raise HTTPException(
                status_code=401, detail='Inicio de sesión incorrecto')

    def auth_wrapper(self, auth: HTTPAuthorizationCredentials = Security(security)):
        return self.decode_token(auth.credentials)


authHandler = AuthHandler()