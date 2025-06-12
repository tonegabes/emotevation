#!/bin/bash

# Exit on error
set -e

echo "==== Emotevation GitHub Pages Deployment ===="
echo "Starting deployment process..."

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
    echo "Created custom index.html in out/emotevation/"
else
    echo "Warning: out/emotevation directory not found. This may be expected if the basePath is applied correctly."
fi

# Check if gh-pages is installed
if ! npm list -g gh-pages > /dev/null 2>&1; then
    echo "Installing gh-pages globally..."
    npm install -g gh-pages
fi

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

# Check deployment status
if [ $? -eq 0 ]; then
    echo "✅ Deployment completed successfully!"
    echo "Your site should be available at: https://tonegabes.github.io/emotevation/"
    
    # Open the deployed site if running in an interactive shell
    if [ -t 1 ]; then
        read -p "Would you like to open the deployed site? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo "Opening https://tonegabes.github.io/emotevation/ in your default browser..."
            if command -v xdg-open > /dev/null; then
                xdg-open "https://tonegabes.github.io/emotevation/"
            elif command -v open > /dev/null; then
                open "https://tonegabes.github.io/emotevation/"
            else
                echo "Could not detect a way to open URLs. Please visit https://tonegabes.github.io/emotevation/ manually."
            fi
        fi
    fi
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi
