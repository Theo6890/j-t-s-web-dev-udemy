FROM node:14.15.0

# Create app directory
RUN mkdir -p /usr/src/smart-brain-api
WORKDIR /usr/src/smart-brain-api

# Install app dependencies
COPY package.json /usr/src/smart-brain-api
RUN npm install -g nodemon \
    && npm install \ 
    && npm update \
    && npm audit fix

# Bundle app source
COPY . .

#CMD ["npm", "start"]

# Build arguments
ARG NODE_VERSION=14.15.0

# Environment
ENV NODE_VERSION $NODE_VERSION
