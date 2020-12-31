FROM node:14.15.0

# Create app directory
RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend

# Install app dependencies
COPY package.json /usr/src/frontend
RUN npm update && npm install && npm update && npm audit fix

# Bundle app source
COPY . /usr/src/frontend

EXPOSE 3001

# Build arguments
ARG NODE_VERSION=14.15.0

# Environment
ENV NODE_VERSION $NODE_VERSION
