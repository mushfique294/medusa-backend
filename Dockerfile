FROM node:20

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 9000

CMD ["npx", "medusa", "start"]