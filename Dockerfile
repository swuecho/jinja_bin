# build stage
FROM node:12 as build-stage

WORKDIR /app

COPY package.json ./ 
COPY yarn.lock  ./ 
RUN yarn install

COPY . .
RUN yarn build
RUN yarn test