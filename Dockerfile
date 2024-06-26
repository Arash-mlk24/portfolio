FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /
COPY package.json package-lock.json ./
RUN npm ci

FROM node:alpine AS builder
WORKDIR /
COPY . .
COPY --from=deps /node_modules ./node_modules
RUN npm run build && npm install --production --ignore-scripts --prefer-offline

FROM node:alpine AS runner
WORKDIR /

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /public ./public
COPY --from=builder --chown=nextjs:nodejs /.next ./.next
COPY --from=builder /node_modules ./node_modules
COPY --from=builder /package.json ./package.json

USER nextjs

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "run", "start"]