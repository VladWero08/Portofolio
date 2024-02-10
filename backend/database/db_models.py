import bcrypt
from sqlalchemy import Engine, Column, Integer, String, LargeBinary
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_name = Column(String(50), nullable=False)
    password = Column(LargeBinary, nullable=False)
    salt = Column(LargeBinary, nullable=False)
    
    def set_password(self, password_plain: str) -> None:
        # generate the salt for the password
        self.salt = bcrypt.gensalt()
        # generate the hash for the password
        password_plain = password_plain.encode("utf-8")
        self.password = bcrypt.hashpw(password_plain, self.salt)


def init_models(engine: Engine) -> None:
    Base.metadata.create_all(engine)