FROM python:3.12-slim-bookworm

ARG SOURCE=/src

# create a source directory where all files related 
# to the backend will be copied
RUN mkdir ${SOURCE}
COPY . ${SOURCE}
WORKDIR ${SOURCE}

RUN apt-get update -y \
    && apt-get upgrade -y

# install python packages
RUN pip install -r ${SOURCE}/requirements.txt

# expose the port
EXPOSE 8000

# run the server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]