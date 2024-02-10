FROM python:3.12.2-bookworm

ARG SOURCE=/src

# create a source directory where all files related 
# to the backend will be copied
RUN mkdir ${SOURCE}
COPY . ${SOURCE}
WORKDIR ${SOURCE}

RUN apt-get update -y \
    && apt-get upgrade -y \
    && apt-get install -y libmariadb3 libmariadb-dev

# install python packages
RUN pip install -r ${SOURCE}/requirements.txt

RUN pip install mariadb
RUN pip install sqlalchemy
RUN pip install python-dotenv
RUN pip install bcrypt

# expose the port
EXPOSE 8000

# run the server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]