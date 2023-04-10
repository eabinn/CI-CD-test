FROM node:16.15.1-alpine as base

ENV NODE_ENV production

COPY . .

EXPOSE 8080

WORKDIR /apps/main-app

CMD ["node ", "server.js"]