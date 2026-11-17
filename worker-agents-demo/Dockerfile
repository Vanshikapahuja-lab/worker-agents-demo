# INTENTIONALLY OUTDATED base image - gives the container scan real findings
# for the Container and Dependency Remediation agent.
FROM node:14-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY src ./src

USER node
CMD ["node", "src/index.js"]
