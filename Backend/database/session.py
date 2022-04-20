from sqlalchemy import create_engine
from sqlalchemy.engine import Engine
from sqlalchemy.orm import sessionmaker, Session, scoped_session
from core import settings_bd

engine: Engine = create_engine(
    settings_bd.SQLALCHEMY_DATABASE_URL, pool_pre_ping=True, pool_size=20)
SessionLocal: Session = sessionmaker(
    autocommit=False, autoflush=False, bind=engine)
session: scoped_session = scoped_session(SessionLocal)
