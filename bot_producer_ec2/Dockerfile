FROM node:16.16.0

ARG USER_ID
ARG GROUP_ID
ARG DOCKER_USER

RUN groupadd -g $GROUP_ID -o $DOCKER_USER
RUN useradd -u $USER_ID -g $GROUP_ID -o $DOCKER_USER
RUN echo '$DOCKER_USER ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers


RUN echo "${PWD}"
RUN apt-get update
RUN apt-get install -y build-essential
RUN apt install -y libnss3 libatk1.0-0 libgconf-2-4 libatk-bridge2.0-0 libgdk-pixbuf2.0-0 libgtk-3-0 libgbm-dev libnss3-dev libxss-dev
RUN apt install -y libasound2

USER $DOCKER_USER
WORKDIR /app
COPY package.json /app
COPY . /app
