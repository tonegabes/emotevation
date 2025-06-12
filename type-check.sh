#!/bin/bash

# This script provides a workaround for ESLint configuration issues
# by running a TypeScript compiler check instead of ESLint

echo "==== Running TypeScript checks instead of ESLint ===="

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Run TypeScript compiler in noEmit mode to check types
echo "Running TypeScript type checks..."
npx tsc --noEmit

if [ $? -eq 0 ]; then
  echo "✅ TypeScript check passed!"
  exit 0
else
  echo "❌ TypeScript check failed. Please fix the type errors above."
  exit 1
fi
