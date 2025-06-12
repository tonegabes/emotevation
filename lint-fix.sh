#!/bin/bash
# This script fixes ESLint configuration issues

# Exit on error
set -e

echo "==== Emotevation ESLint Fix Script ===="

# Install ESLint v9 (or the latest major version compatible with Next.js)
echo "Installing latest ESLint version..."
npm install eslint@latest --save-dev

# Update ESLint configuration
echo "Creating simplified ESLint configuration..."
cat > .eslintrc.json << EOL
{
  "extends": ["next/core-web-vitals"],
  "ignorePatterns": ["dist/", ".next/", "node_modules/"]
}
EOL

echo "Creating .eslintignore file..."
cat > .eslintignore << EOL
node_modules/
.next/
dist/
public/
EOL

# Create a basic Next.js linting setup
echo "Creating simple Next.js linting script..."
cat > simple-lint.js << EOL
#!/usr/bin/env node
const { ESLint } = require('eslint');
const path = require('path');

async function main() {
  console.log('Running simplified ESLint check...');
  
  const eslint = new ESLint({
    useEslintrc: true,
    fix: true
  });

  const results = await eslint.lintFiles(['app/**/*.{js,jsx,ts,tsx}']);
  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);
  
  console.log(resultText || 'No linting errors found!');
  
  // Write fixes
  await ESLint.outputFixes(results);
}

main().catch(error => {
  console.error('Error running ESLint:', error);
  process.exit(1);
});
EOL

chmod +x simple-lint.js

echo "Running simplified linting..."
node simple-lint.js

echo "✅ ESLint configuration fixed!"
