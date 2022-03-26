from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core import settings_fastApi
from api.v1 import api_router

app = FastAPI(title=settings_fastApi.PROJECT_TITLE,
              description=settings_fastApi.PROJECT_DESCRIPTION,
              version=settings_fastApi.PROJECT_VERSION,
              openapi_tags=settings_fastApi.PROJECT_TAGS)


app.add_middleware(
    CORSMiddleware,
    allow_origins=settings_fastApi.PROJECT_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(api_router)
