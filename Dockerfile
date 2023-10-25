FROM node:20 as base

#set working dir
WORKDIR /app
COPY package*.json ./

RUN npm i

COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN npm run build