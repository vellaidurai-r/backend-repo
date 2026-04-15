FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx tsc
RUN ls -l /app && cat /app/tsconfig.json
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]