#!/bin/bash
# This script ensures consistent dependency installation

# Exit on error
set -e

echo "==== Emotevation Dependency Installation Script ===="

# Remove node_modules if it exists
if [ -d "node_modules" ]; then
  echo "Removing existing node_modules directory..."
  rm -rf node_modules
fi

# Clean npm cache
echo "Cleaning npm cache..."
npm cache clean --force

# Check Node.js version
NODE_VERSION=$(node -v | cut -d 'v' -f2 | cut -d'.' -f1)
echo "Detected Node.js version: $(node -v)"

# Handle glob package version based on Node.js version
if [ "$NODE_VERSION" -lt "20" ]; then
  echo "Node.js version < 20 detected, ensuring compatible glob version..."
  # Make sure glob is downgraded to a compatible version
  npm install glob@10.3.10 --save-dev --no-fund --no-audit || true
fi

# Handle ESLint version to be compatible with eslint-config-next
echo "Ensuring compatible ESLint version..."
npm install eslint@8.57.0 --save-dev --no-fund --no-audit || true

# Run dependency check script (with error handling)
echo "Checking for dependency conflicts..."
chmod +x scripts/check-dependencies.js
node scripts/check-dependencies.js || {
  echo "Warning: Dependency check script failed, continuing with installation..."
}

# Try normal install first
echo "Installing dependencies with npm ci..."
if npm ci; then
  echo "✅ Dependencies installed successfully with npm ci!"
  exit 0
fi

# If npm ci fails, try regular install
echo "npm ci failed, trying npm install..."
if npm install; then
  echo "✅ Dependencies installed successfully with npm install!"
  exit 0
fi

# Last resort: try with legacy peer deps
echo "Standard install failed, trying with --legacy-peer-deps flag..."
if npm install --legacy-peer-deps; then
  echo "⚠️ Dependencies installed with --legacy-peer-deps. This might cause issues."
  echo "Consider fixing the dependency conflicts in package.json."
  exit 0
else
  echo "❌ All installation methods failed."
  echo "Please check your package.json for conflicts, especially with ESLint versions."
  exit 1
fi
