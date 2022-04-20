from fastapi import APIRouter
from api.v1 import miscellaneous, user, profilepics

api_router : APIRouter = APIRouter()

api_router.include_router(miscellaneous.router, prefix = '/miscellaneous')
api_router.include_router(user.router, prefix = '/user')
api_router.include_router(profilepics.router, prefix='/profilepics')