FROM zenika/alpine-chrome:with-node

# Create app directory
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# Install deps
RUN yarn

# Bundle app source
COPY . .

# Build
RUN yarn build

# Start
CMD [ "yarn", "start" ]
