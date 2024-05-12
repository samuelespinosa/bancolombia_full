FROM node:latest
WORKDIR /code/front_end
COPY package.json package-lock.json* ./
RUN npm install
CMD ["npm", "run", "dev"]
COPY . .
