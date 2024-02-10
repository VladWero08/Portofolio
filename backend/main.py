import os
import secrets
from datetime import datetime, timedelta

from dotenv import load_dotenv
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.responses import JSONResponse

from db_conn import get_engine, get_session
from db_models import init_models
from db_operations import create_user, find_user

app = FastAPI()

# load the environment variables
load_dotenv()

# create the engine for MariaDB
engine = get_engine(
    user=os.getenv("DB_USER_NAME"),
    password=os.getenv("DB_USER_PASSWORD"),
    database=os.getenv("DB_NAME"),
    host=os.getenv("DB_HOST"),
    port=os.getenv("DB_PORT")
)

# initiate all the database models
init_models(engine)

@app.get("/")
async def root():
    return {"message": "Hello World!"}

@app.post("/users/create")
async def users_create(username: str, password: str):
    try:
        session = get_session(engine)
        user_was_created = create_user(session, username, password)

        if user_was_created:
            return HTTPException(
                status_code=status.HTTP_201_CREATED
            )
        else:
            return HTTPException(
                status_code=status.HTTP_409_CONFLICT
            )
    except Exception as e:
        return HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@app.post("/users/login")
async def users_login(user_name: str, password: str):
    try:
        session = get_session(engine)

        # check if the user exists in the database
        if find_user(session, user_name, password) is False:
            return HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, 
            )

        response = JSONResponse(content="Succesfully logged in!")
        response.status_code = status.HTTP_202_ACCEPTED
        response.set_cookie(
            key=secrets.token_hex(16), 
            value=user_name,
            expires=datetime.now() + timedelta(days=3)
        )

        return response
    except Exception as e:
        return HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="Internal server error!"
        )