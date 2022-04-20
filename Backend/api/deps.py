from typing import Generator
from database.session import SessionLocal
from fastapi.exceptions import HTTPException


def get_db() -> Generator:
    try:
        SessionLocal().connection()
    except Exception:
        raise HTTPException(
            status_code=404, detail='La base de datos no esta disponible')
