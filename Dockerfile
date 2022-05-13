FROM node:16-alpine

WORKDIR /app/

COPY package.json yarn.lock remix.config.js ./
RUN NODE_ENV=development yarn --non-interactive --frozen-lockfile --check-files
ENV NODE_ENV=production
COPY . ./
RUN yarn build

ENTRYPOINT yarn start