from fastapi import APIRouter
from .miscellaneous import router as miscellaneous_router

api_router : APIRouter = APIRouter()

api_router.include_router(miscellaneous_router, prefix = '/miscellaneous')