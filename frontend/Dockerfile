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
RUN mkdir -p /app/node_modules/.vite && \
    chown -R nodejs:nodejs /app




# =================================================
# Development Stage
# =================================================
FROM build-deps AS development

#Set Environment
ENV NODE_ENV=development \
    NPM_CONFIG_LOGLEVEL=warn

# Copy Source Files
COPY . .

#Ensure all directories have proper permissions
RUN mkdir -p /app/node_modules/.vite && \
    chown -R nodejs:nodejs /app && \
    chmod -R 755 /app

# Switch to non-root user
USER nodejs

# Expose Ports
EXPOSE 3000 5173 9229

# Start Development Server
CMD ["npm", "run", "dev"]



# =================================================
# Build Stage
# =================================================
FROM build-deps as build

# Copy only necessary files for building (respects .dockerignore)

COPY --chown=nodejs:nodejs . .

# Build the application
RUN npm run build

## Set proper ownership
RUN chown -R nodejs:nodejs /app

# =================================================
# Production Stage
# =================================================
ARG NODE_VERSION=25.1.0-alpine
FROM node:${NODE_VERSION} as production

WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 -G nodejs && \
    chown -R nodejs:nodejs /app

RUN npm install -g serve
# Set optimized environment variables
ENV NODE_ENV=production \
    NODE_OPTIONS="--max-old-space-size=256 --no-warnings" \
    NPM_CONFIG_LOGLEVEL=silent


# Copy production dependencies from deps stage
COPY --from=deps --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=deps --chown=nodejs:nodejs /app/package*.json ./
# Copy built application from build stage
COPY --from=build --chown=nodejs:nodejs /app/build ./build

# Run the application as a non-root user.
USER nodejs

# Expose the port that the application listens on.
EXPOSE 8080

# Run the application.
CMD ["serve", "-s", "-p", "8080", "build"]
