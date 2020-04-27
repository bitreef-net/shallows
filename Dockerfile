FROM node:latest

WORKDIR /app/
COPY . /app

RUN npm install

CMD ["nodejs", "/app/app.js"]
