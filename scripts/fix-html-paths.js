/**
 * This script ensures that the Next.js scripts are correctly loaded in the GitHub Pages deployment.
 * It looks for generated JavaScript files and updates the HTML references accordingly.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Paths
const outDir = path.join(__dirname, '../dist');
const emotevationDir = path.join(outDir, 'emotevation');
const indexFile = path.join(emotevationDir, 'index.html');

// Check if directories exist
if (!fs.existsSync(outDir)) {
  console.error('Error: dist directory does not exist');
  process.exit(1);
}

if (!fs.existsSync(emotevationDir)) {
  console.log('Creating emotevation directory...');
  fs.mkdirSync(emotevationDir, { recursive: true });
}

// Find the generated JavaScript chunks
console.log('Looking for Next.js script files...');
const nextStaticDir = path.join(outDir, '_next/static');

// Get main chunk files
const mainJsFiles = glob.sync(path.join(nextStaticDir, 'chunks/main-*.js'));
const pagesJsFiles = glob.sync(path.join(nextStaticDir, 'chunks/pages/index-*.js'));
const appJsFiles = glob.sync(path.join(nextStaticDir, 'chunks/pages/_app-*.js'));
const frameworkJsFiles = glob.sync(path.join(nextStaticDir, 'chunks/framework-*.js'));
const webpackJsFiles = glob.sync(path.join(nextStaticDir, 'chunks/webpack-*.js'));
const cssFiles = glob.sync(path.join(nextStaticDir, 'css/*/app/layout.css'));
const errorJsFiles = glob.sync(path.join(nextStaticDir, 'chunks/pages/_error-*.js'));
const appErrorJsFiles = glob.sync(path.join(nextStaticDir, 'chunks/app/error-*.js'));
const appGlobalErrorJsFiles = glob.sync(path.join(nextStaticDir, 'chunks/app/global-error-*.js'));

// Create script paths relative to emotevation directory
const scriptPaths = {
  main: mainJsFiles.length > 0 ? `/emotevation/_next/static/chunks/${path.basename(mainJsFiles[0])}` : null,
  pages: pagesJsFiles.length > 0 ? `/emotevation/_next/static/chunks/pages/${path.basename(pagesJsFiles[0])}` : null,
  app: appJsFiles.length > 0 ? `/emotevation/_next/static/chunks/pages/${path.basename(appJsFiles[0])}` : null,
  framework: frameworkJsFiles.length > 0 ? `/emotevation/_next/static/chunks/${path.basename(frameworkJsFiles[0])}` : null,
  webpack: webpackJsFiles.length > 0 ? `/emotevation/_next/static/chunks/${path.basename(webpackJsFiles[0])}` : null,
  css: cssFiles.length > 0 ? `/emotevation/_next/static/css/${path.basename(path.dirname(cssFiles[0]))}/app/layout.css` : null,
  error: errorJsFiles.length > 0 ? `/emotevation/_next/static/chunks/pages/${path.basename(errorJsFiles[0])}` : null,
  appError: appErrorJsFiles.length > 0 ? `/emotevation/_next/static/chunks/app/${path.basename(appErrorJsFiles[0])}` : null,
  globalError: appGlobalErrorJsFiles.length > 0 ? `/emotevation/_next/static/chunks/app/${path.basename(appGlobalErrorJsFiles[0])}` : null
};

console.log('Found script paths:', scriptPaths);

// Create HTML content with the correct script paths
const htmlContent = `<!DOCTYPE html>
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
  
  <!-- GitHub Pages router script -->
  <script src="/emotevation/gh-pages-router.js"></script>
  <script src="/emotevation/error-handler.js"></script>
  
  ${scriptPaths.css ? `<link rel="stylesheet" href="${scriptPaths.css}">` : ''}
</head>
<body>
  <div id="__next">
    <!-- The Next.js app will be mounted here -->
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <div style="border: 5px solid #f3f3f3; border-top: 5px solid #7928ca; border-radius: 50%; width: 50px; height: 50px; animation: spin 1s linear infinite; margin-bottom: 20px;"></div>
      <h1>Loading Emotevation...</h1>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    </div>
  </div>
  
  <!-- Load Next.js scripts -->
  ${scriptPaths.webpack ? `<script src="${scriptPaths.webpack}" defer></script>` : ''}
  ${scriptPaths.framework ? `<script src="${scriptPaths.framework}" defer></script>` : ''}
  ${scriptPaths.main ? `<script src="${scriptPaths.main}" defer></script>` : ''}
  ${scriptPaths.app ? `<script src="${scriptPaths.app}" defer></script>` : ''}
  ${scriptPaths.pages ? `<script src="${scriptPaths.pages}" defer></script>` : ''}
  ${scriptPaths.error ? `<script src="${scriptPaths.error}" defer></script>` : ''}
  ${scriptPaths.appError ? `<script src="${scriptPaths.appError}" defer></script>` : ''}
  ${scriptPaths.globalError ? `<script src="${scriptPaths.globalError}" defer></script>` : ''}
</body>
</html>`;

// Write the HTML file
console.log('Writing index.html to', indexFile);
fs.writeFileSync(indexFile, htmlContent);

// Also update the root index.html to ensure redirection works
const rootIndexFile = path.join(outDir, 'index.html');
const rootIndexContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Emotevation - Personalized Daily Motivation</title>
  <meta http-equiv="refresh" content="0;url=/emotevation/">
  <script src="/emotevation/error-handler.js"></script>
  <script>
    // Check for missing error components message
    if (document.body && document.body.innerText && 
        (document.body.innerText.includes('missing required error components') || 
         document.body.innerText.includes('refreshing'))) {
      console.log("Detected error components issue, forcing refresh to emotevation path");
      window.location.href = "/emotevation/";
    } else {
      window.location.href = "/emotevation/";
    }
  </script>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      color: #333;
      text-align: center;
    }
    .loader {
      border: 5px solid #f3f3f3;
      border-top: 5px solid #7928ca;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
      margin-bottom: 20px;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    a {
      color: #7928ca;
      text-decoration: none;
      font-weight: bold;
      margin-top: 20px;
      padding: 10px 20px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }
    a:hover {
      background-color: #7928ca;
      color: white;
    }
  </style>
</head>
<body>
  <div class="loader"></div>
  <h1>Redirecting to Emotevation...</h1>
  <p>You will be redirected to the app momentarily</p>
  <a href="/emotevation/">Click here if you are not redirected automatically</a>
</body>
</html>`;

console.log('Writing root index.html to', rootIndexFile);
fs.writeFileSync(rootIndexFile, rootIndexContent);

console.log('HTML files updated successfully');
