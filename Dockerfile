# syntax=docker/dockerfile:1

FROM node:22.6.0-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --production
COPY . .
CMD ["pnpm", "start"]
EXPOSE 3000