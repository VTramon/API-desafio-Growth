FROM node

WORKDIR /usr/app

COPY package.json tsconfig.json yarn.lock ./
COPY public ./
COPY src ./

RUN yarn
CMD [ "yarn", "start" ]

EXPOSE 3000