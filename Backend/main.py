import argparse, os, uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core import settings_fastApi
from api.v1 import api_router

port_os = os.getenv('PORT', default=8000)

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

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("--host", default="0.0.0.0", type=str)
    parser.add_argument("--port", default=port_os, type=int)
    parser.add_argument("--precache-models", action="store_true")
    
    opt = parser.parse_args()
    uvicorn.run("main:app", host=opt.host, port=opt.port, reload=True)