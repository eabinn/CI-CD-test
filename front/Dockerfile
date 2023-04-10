FROM node:16.15.1-alpine as base

COPY . .

WORKDIR /apps/main-app

EXPOSE 8080

CMD ["PORT", "8080", "node", "server.js"]