from sqlalchemy import Engine, create_engine
from sqlalchemy.orm import Session, sessionmaker

def get_engine(
    user: str,
    password: str,
    database: str,
    host: str,
    port: int,
) -> Engine:
    engine_url = f"mariadb+mariadbconnector://{user}:{password}@{host}:{port}/{database}"
    engine = create_engine(
        url=engine_url,
        pool_size=20,
        max_overflow=5
    )

    return engine

def get_session(engine: Engine) -> Session:
    session = sessionmaker()
    session.configure(bind=engine)

    return session()