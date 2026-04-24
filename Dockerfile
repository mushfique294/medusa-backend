FROM node:20

WORKDIR /app

# Install postgres client (for pg_isready)
RUN apt-get update && apt-get install -y postgresql-client

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 9000

CMD ["npx", "medusa", "start"]