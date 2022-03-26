from pydantic import BaseSettings

class SettingsFastApi(BaseSettings) :
    PROJECT_TITLE : str = 'Dating App'
    PROJECT_VERSION : str = '/api/v1'
    PROJECT_DESCRIPTION : str = 'It\'s a dating app where different people can meet and love each other'
    PROJECT_ORIGINS : list = ['http://localhost:4200']
    PROJECT_TAGS : list = [
        {
            "name" : "miscellaneous",
            "description" : "different actions for different occasions"
        }
    ]

settings_fastApi : SettingsFastApi = SettingsFastApi()