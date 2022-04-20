from fastapi import APIRouter, Depends
from models import ProfilePics, ProfilePicsModel
from sqlalchemy.orm import Session
from database import session
from sqlalchemy import insert
from api.deps import get_db

router = APIRouter()

@router.post('/create',
             tags=['profilepics'],
             summary='Register an user to the database',
             response_model=bool,
             response_description='Boolean depends if it was created or not')
def register(profile_pic : ProfilePicsModel, db: Session = Depends(get_db)) :
    try :
        session.execute(insert(ProfilePics).values(dict(profile_pic)))
        session.commit()
        session.close()
    except Exception:
        return False
    
    return True