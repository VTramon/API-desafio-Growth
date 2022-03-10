FROM node

WORKDIR /usr/app
COPY package.json tsconfig.json yarn.lock ./
COPY src ./

RUN yarn
CMD [ "yarn", "dev" ]

EXPOSE 4000