FROM node:18

WORKDIR /app

# Copy only backend files
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]

