#!/bin/bash

echo "Building for production..."
npm run build

echo "Creating .nojekyll file..."
touch out/.nojekyll

echo "Creating redirects..."
cp public/github-index.html out/index.html

echo "Deploying to GitHub Pages..."
npx gh-pages -d out

echo "Deployment complete! Check https://tonegabes.github.io/motevation/"
