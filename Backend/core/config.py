from pydantic import BaseSettings
from core.secret import password_db

class SettingsFastApi(BaseSettings) :
    PROJECT_TITLE : str = 'Dating App'
    PROJECT_VERSION : str = '/api/v1'
    PROJECT_DESCRIPTION : str = 'It\'s a dating app where different people can meet and love each other'
    PROJECT_ORIGINS : list = ['https://localhost:4200', 'http://localhost:4200']
    PROJECT_TAGS : list = [
        {
            "name" : "miscellaneous",
            "description" : "different actions for different occasions"
        },
        {
            "name" : "user",
            "description" : "CRUD about user or user's info"
        },
        {
            "name" : "profilepics",
            "description" : "CRUD about user's profile pics"
        }
    ]

settings_fastApi : SettingsFastApi = SettingsFastApi()

class SettingsBD(BaseSettings):
    SQLALCHEMY_DATABASE_URL: str = 'mysql+pymysql://root:' + password_db +'@datingapp.cwvnqaxdk4lv.eu-west-3.rds.amazonaws.com:3306/datingapp'

settings_bd: SettingsBD = SettingsBD()