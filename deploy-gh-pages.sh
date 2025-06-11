#!/bin/bash

# Build the Next.js app
echo "Building the Next.js app..."
NODE_ENV=production npm run build

# Ensure .nojekyll file exists
echo "Creating .nojekyll file..."
touch out/.nojekyll

# Copy GitHub Pages routing files
echo "Copying routing files for GitHub Pages..."
cp public/github-index.html out/index.html
cp public/404.html out/404.html

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment completed! Your site should be available at: https://tonegabes.github.io/emotevation/"
