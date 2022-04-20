from pydantic import BaseSettings

class SettingsFastApi(BaseSettings) :
    PROJECT_TITLE : str = 'Dating App'
    PROJECT_VERSION : str = '/api/v1'
    PROJECT_DESCRIPTION : str = 'It\'s a dating app where different people can meet and love each other'
    PROJECT_ORIGINS : list = ['https://localhost:4200']
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
    SQLALCHEMY_DATABASE_URL: str = 'mariadb+pymysql://root:root@localhost:3306/secretlove?charset=utf8mb4'

settings_bd: SettingsBD = SettingsBD()