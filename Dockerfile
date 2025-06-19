# Etap 1: Budowanie aplikacji
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etap 2: Obraz produkcyjny
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY package*.json ./

ENV NODE_ENV=production

CMD ["node", "dist/main"]
