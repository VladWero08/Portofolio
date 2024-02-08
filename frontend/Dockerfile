FROM node:alpine

ARG SOURCE=/src

# create a source directory where all files related 
# to the frontend will be copied
RUN mkdir ${SOURCE}
COPY . ${SOURCE}
WORKDIR ${SOURCE}

RUN npm i

# install node modules
RUN npm install --force

EXPOSE 3000

CMD ["npm", "start"]