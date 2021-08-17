FROM node:current

WORKDIR /app

COPY . .

COPY package.json package-lock.json .env /app/

RUN npm install

CMD npm run dev