# build stage
FROM node:12 as build-stage

WORKDIR /app

# RUN yarn config set registry https://mirrors.huaweicloud.com/repository/npm/
# RUN yarn config set registry https://registry.npm.taobao.org
# RUN yarn config set "chromedriver_cdnurl" "https://registry.npm.taobao.org/chromedriver"

# clean versions without the storybook dependency
COPY package.json ./ 
COPY yarn.lock  ./ 
RUN yarn install

COPY . .
RUN yarn build
RUN yarn test