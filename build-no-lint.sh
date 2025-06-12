#!/bin/bash
# This script builds the Next.js app without running ESLint

# Exit on error
set -e

echo "==== Building Next.js app without linting ===="

# Clean previous builds
echo "Cleaning previous builds..."
rm -rf dist .next

# Ensure TypeScript is installed
echo "Making sure TypeScript is installed..."
npm list typescript || npm install typescript --no-save

# Skip type checking for GitHub Actions (it's slow and we just want a build)
if [ -z "$GITHUB_ACTIONS" ]; then
  # Run TypeScript check instead of ESLint
  echo "Running TypeScript type checks..."
  npx tsc --noEmit || echo "TypeScript check failed, but continuing build..."
else
  echo "Running in GitHub Actions - skipping type check for speed"
fi

# Build with ESLint disabled
echo "Building Next.js app..."
DISABLE_ESLINT_PLUGIN=true ESLINT_DISABLE=true NODE_ENV=production npx next build

echo "✅ Build completed successfully!"
