#!/bin/bash

# Exit on error
set -e

echo "==== Emotevation GitHub Pages Deployment ===="
echo "Starting deployment process..."

# Clean previous builds
echo "Cleaning previous builds..."
rm -rf out

# Build the Next.js app
echo "Building the Next.js app..."
NODE_ENV=production npm run build

# Ensure .nojekyll file exists
echo "Creating .nojekyll file..."
touch out/.nojekyll

# Copy GitHub Pages routing files
echo "Copying routing files for GitHub Pages..."
cp public/404.html out/404.html
cp public/gh-pages-router.js out/gh-pages-router.js

# Run the script to fix HTML paths
echo "Fixing HTML paths for Next.js scripts..."
node scripts/fix-html-paths.js

# Create the emotevation directory if it doesn't exist
mkdir -p out/emotevation

# Copy the special 404 file for the emotevation directory
echo "Adding special 404 handling for client-side routing..."
cp public/404-emotevation.html out/emotevation/404.html

# Create a CNAME file if you have a custom domain
# echo "yourdomain.com" > out/CNAME

# Ensure gh-pages is installed locally
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "Installing gh-pages locally..."
    npm install --save-dev gh-pages
fi

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d out

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
