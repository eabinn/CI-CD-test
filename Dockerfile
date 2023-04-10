FROM node:16.15.1-alpine as base

RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*

RUN npm install -g pnpm

FROM base as builder

WORKDIR /front

COPY . .

RUN pnpm install

RUN pnpm -w run build-main-app

FROM node:16.15.1-alpine

RUN mkdir -p /apps/main-app

COPY --from=builder /front/node_modules ./node_modules

COPY --from=builder /front/apps/main-app/node_modules /apps/main-app/node_modules

COPY --from=builder /front/apps/main-app/build /apps/main-app/build

COPY --from=builder /front/apps/main-app/next.config.js /apps/main-app/next.config.js

COPY --from=builder /front/apps/main-app/package.json /apps/main-app/package.json

WORKDIR /apps/main-app

EXPOSE 8080

CMD ["npm", "run", "start"]