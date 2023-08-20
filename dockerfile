FROM node:16.19 as node

WORKDIR /app

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 4200

CMD [ "npm", "run", "start" ]
