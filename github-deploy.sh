#!/bin/bash

echo "Building for GitHub Pages..."
NODE_ENV=production next build
touch out/.nojekyll

echo "Deploying to GitHub Pages..."
npx gh-pages -d out

echo "Done! Check your site at https://tonegabes.github.io/motevation/"
