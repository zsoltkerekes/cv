# Stage 1

FROM node:16.19 as node

WORKDIR /app

COPY . .

RUN npm install --force

RUN npm run ng build


# Stage 2

FROM nginx

COPY --from=node /app/dist /usr/share/nginx/html
