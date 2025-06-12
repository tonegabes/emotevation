#!/usr/bin/env node

/**
 * This is a simplified dependency check script that only handles critical ESLint compatibility.
 * It's used as a fallback when the main check-dependencies.js fails.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Running simplified dependency checker...');

// Path to package.json
const packagePath = path.resolve(process.cwd(), 'package.json');
if (!fs.existsSync(packagePath)) {
  console.log('package.json not found!');
  process.exit(0);
}

// Parse package.json
let packageJson;
try {
  packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
} catch (error) {
  console.log(`Error parsing package.json: ${error.message}`);
  process.exit(0);
}

// Fix ESLint if needed
if (packageJson.devDependencies && packageJson.devDependencies.eslint) {
  const eslintVersion = packageJson.devDependencies.eslint;
  if (eslintVersion.startsWith('^9') || eslintVersion.startsWith('9')) {
    console.log('Found ESLint v9.x which is incompatible with eslint-config-next. Fixing...');
    try {
      execSync('npm uninstall eslint --no-fund --quiet');
      execSync('npm install eslint@8.57.0 --save-dev --no-fund --quiet');
      console.log('Fixed ESLint version to 8.57.0');
    } catch (error) {
      console.log(`Failed to fix ESLint: ${error.message}`);
    }
  }
}

console.log('Simplified dependency check complete.');
