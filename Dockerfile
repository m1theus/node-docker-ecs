FROM node:14-alpine3.14

ENV NODE_ENV=production
ENV TESTE=$TESTE

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "index.js" ]