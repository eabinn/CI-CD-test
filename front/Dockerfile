FROM node:16.15.1-alpine as base

COPY . .

WORKDIR /apps/main-app

ENV NODE_ENV=production

ENV PORT=8080

EXPOSE 8080

CMD ["node", "server.js"]