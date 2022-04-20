from fastapi import APIRouter, Depends
from models import User, UserModelBasic, UserModelComplete
from sqlalchemy.orm import Session
from database import session
from sqlalchemy import insert
from api.deps import get_db
from core import authHandler
router = APIRouter()

@router.get('/find/{email}',
            tags=['user'],
            summary='Get an user by email',
            response_model=UserModelComplete,
            response_description='A user')
def findUser(email : str, db: Session = Depends(get_db)) :
    user : list = session.query(User).filter(User.email == email).all()
    if len(user) > 0 :
        return session.query(User).filter(User.email == email).all()[0]
    else : 
        return None

@router.get('/login/{user_id}',
             tags=['user'],
             summary='Login an user to get token',
             response_model=str,
             response_description='Token of the user')
def login(user_id : str, db: Session = Depends(get_db)) :
    return authHandler.encode_token(user_id)

@router.post('/register',
             tags=['user'],
             summary='Register an user to the database',
             response_model=bool,
             response_description='Boolean depends if it was created or not')
def register(user : UserModelBasic, db: Session = Depends(get_db)) :
    try :
        session.execute(insert(User).values(dict(user)))
        session.commit()
        session.close()
    except Exception:
        return False
    
    return True
