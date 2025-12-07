# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# ====================================================================
# Optimized Multi-Stage Dockerfile
# Node.js TypeScript Application
# ====================================================================

ARG NODE_VERSION=25.1.0-alpine

# Use node image for base image for all stages.
FROM node:${NODE_VERSION} as base

# Set working directory for all build stages.
WORKDIR /app

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 -G nodejs && \
    chown -R nodejs:nodejs /app


# =================================================
# Production Dependancies Stage
# =================================================
# Create a stage for installing production dependecies.
FROM base as deps

COPY package*.json ./

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage bind mounts to package.json and package-lock.json to avoid having to copy them
# into this layer.
RUN --mount=type=cache,target=/root/.npm,sharing=locked \
    npm ci --omit=dev && \
    npm cache clean --force

RUN chown -R nodejs:nodejs /app




# =================================================
# Build Dependancies Stage
# =================================================
FROM base AS build-deps

COPY package*.json ./

# Install all dependencies with build optimizations
RUN --mount=type=cache,target=/root/.npm,sharing=locked \
    npm ci --no-audit --no-fund && \
    npm cache clean --force

# Create necessary directories and set permissions
RUN chown -R nodejs:nodejs /app

# =================================================
# Development Stage
# =================================================
FROM build-deps AS production

#Set Environment
ENV NODE_ENV=production \
    NPM_CONFIG_LOGLEVEL=warn

# Copy Source Files
COPY . .

#Ensure all directories have proper permissions
RUN chown -R nodejs:nodejs /app && \
    chmod -R 755 /app

RUN npm install nodemon -g


# Switch to non-root user
USER nodejs

# Expose Ports
EXPOSE 3001

# Start Development Server
CMD ["nodemon", "server.js"]