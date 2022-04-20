from datetime import date
from pydantic import BaseModel
from sqlalchemy import DATE, Column, String
from sqlalchemy.orm import relationship
from models.modelsBD.profilepics import ProfilePicsModel
from database import Base


class UserModelBasic(BaseModel):
    user_id: str
    tel: str
    email: str
    name: str
    password: str
    birthday: date
    gender: str
    interest: str
    city: str
    region: str
    country: str
    rol: str

    class Config:
        orm_mode = True

class UserModelComplete(BaseModel):
    user_id: str
    tel: str
    email: str
    name: str
    password: str
    birthday: date
    gender: str
    interest: str
    city: str
    region: str
    country: str
    rol: str
    profile_pics : list[ProfilePicsModel]

    class Config:
        orm_mode = True


class User(Base):
    user_id: str = Column(String, primary_key=True)
    tel: str = Column(String, unique=True, nullable=False)
    email: str = Column(String, unique=True, nullable=False)
    name: str = Column(String, nullable=False)
    password: str = Column(String, nullable=False)
    birthday: date = Column(DATE, nullable=False)
    gender: str = Column(String, nullable=False)
    interest: str = Column(String, nullable=False)
    city: str = Column(String, nullable=False)
    region: str = Column(String)
    country: str = Column(String, nullable=False)
    rol: str = Column(String, nullable=False)
    profile_pics = relationship(
        'ProfilePics', foreign_keys='ProfilePics.user_id')

    def __init__(self, user: UserModelBasic):
        self.user_id = user.user_id
        self.tel = user.tel
        self.email = user.email
        self.name = user.name
        self.password = user.password
        self.birthday = user.birthday
        self.gender = user.gender
        self.interest = user.interest
        self.city = user.city
        self.region = user.region
        self.country = user.country
        self.rol = user.rol
