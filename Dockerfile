FROM node:10
ADD . /code
WORKDIR /code
RUN npm i
CMD npm start
