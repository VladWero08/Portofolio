import os
import secrets
from datetime import date, timedelta

from dotenv import load_dotenv
from fastapi import FastAPI, Form, HTTPException, status
from fastapi.responses import Response, JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from database.db_conn import get_engine, get_session
from database.db_models import init_models
from database.db_operations import create_user, find_user

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

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

# dictionary with cookies
cookies = {}

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
            return Response(
                status_code=status.HTTP_201_CREATED
            )
        else:
            return Response(
                status_code=status.HTTP_409_CONFLICT
            )
    except Exception as e:
        return Response(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

def set_cookie(user_name: str):
    cookie = secrets.token_hex(16)
    expiration = date.today() + timedelta(days=3)
    
    cookies[user_name] = {
        "cookie": cookie,
        "expiration": expiration,
    }

@app.post("/users/login")
async def users_login(username: str, password: str):
    try:
        session = get_session(engine)

        # check if the user exists in the database
        if find_user(session, username, password) is False:
            return JSONResponse(
                status_code=status.HTTP_404_NOT_FOUND, 
            )

        set_cookie(username)

        response = JSONResponse(content={
            "cookie": cookies[username]["cookie"]
        })
        response.status_code = status.HTTP_202_ACCEPTED

        return response
    except Exception as e:
        print(e)
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
        )
    
@app.get("/users/is_logged")
async def user_is_logged(cookie: str, user_name: str):
    if user_name in cookies and cookies[user_name]["cookie"] == cookie:
        return Response(
            status_code=status.HTTP_200_OK
        )
    else:
        return Response(
            status_code=status.HTTP_401_UNAUTHORIZED
        )