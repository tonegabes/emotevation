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
cp public/gh-pages-router.js out/gh-pages-router.js

# Ensure emotevation index.html doesn't redirect to itself
echo "Ensuring proper redirections..."
if [ -d "out/emotevation" ]; then
    # Make sure there's no redirect loop in the emotevation directory
    cat > out/emotevation/index.html << EOL
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Emotevation - Personalized Daily Motivation</title>
  <meta name="description" content="Get personalized motivational quotes or reality checks based on your name and date. Every combination creates a unique result to inspire your day.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta property="og:title" content="Emotevation - Personalized Daily Motivation">
  <meta property="og:description" content="Get personalized motivational quotes or reality checks based on your name and date.">
  <meta property="og:image" content="https://tonegabes.github.io/emotevation/opengraph-image.png">
  <meta property="og:url" content="https://tonegabes.github.io/emotevation/">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <script src="/emotevation/gh-pages-router.js"></script>
</head>
<body>
  <div id="__next"></div>
</body>
</html>
EOL
fi

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment completed! Your site should be available at: https://tonegabes.github.io/emotevation/"
