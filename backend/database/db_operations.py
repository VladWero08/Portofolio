import bcrypt
from database.db_models import Users
from sqlalchemy.orm import Session, sessionmaker

def create_user(session: Session, user_name: str, password: str) -> bool:
    """
    Given a `Session` and a `Users` object, insert the user
    in the database.
    """
    user = session.query(Users).filter_by(user_name=user_name).first()

    if user is not None:
        return False

    # create the user
    user = Users(user_name=user_name)
    user.set_password(password_plain=password)

    # add the user in the database
    session.add(user)
    session.commit()

    return True

def find_user(session: Session, user_name: str, password: str) -> bool:
    """
    Given a `Session`, a user_name and a password, check
    if the user exists in the database, and if it does,
    check if the password matches.
    """
    user = session.query(Users).filter_by(user_name=user_name).first()

    if user is None:
        return False
    
    password = password.encode("utf-8")
    password_hashed = bcrypt.hashpw(password, user.salt)

    return password_hashed == user.password
