from pydantic import BaseModel
from sqlalchemy import Column, ForeignKey, String
from database import Base


class ProfilePicsModel(BaseModel):
    image_id: str
    user_id: str
    image: str

    class Config:
        orm_mode = True


class ProfilePics(Base):
    image_id: str = Column(String, primary_key=True)
    user_id: str = Column(String, ForeignKey('user.user_id'))
    image: str = Column(String, nullable=False)
