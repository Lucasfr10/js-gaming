from node:latest

RUN apt-get update && apt-get install -y curl apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

WORKDIR /usr/src/app

RUN yarn global add  webpack webpack-cli webpack-dev-server

COPY package*.json ./
COPY yarn.lock ./s
RUN yarn install

COPY . /usr/src/app
