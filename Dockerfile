FROM node:22 AS build

WORKDIR /opt/app

COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 3032

CMD ["pnpm", "run", "start:dev"]
