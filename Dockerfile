FROM node:18-alpine AS builder

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm clean-install /
COPY . ./
RUN npx ng build --prod


# second stage
From nginx:1.15.2-alpine
COPY --from=builder /usr/src/app/dist/mubank /var/www
COPY nginx.conf /etc/nginx/nginx.conf

Expose 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]
