#!/usr/bin/env node

/**
 * This script checks for known dependency conflicts and fixes them automatically.
 * It's run as part of the postinstall script in package.json.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Color console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

log('🔍 Checking for dependency conflicts...', colors.cyan);

// Read package.json
let packagePath;
try {
  packagePath = path.resolve(process.cwd(), 'package.json');
  if (!fs.existsSync(packagePath)) {
    log('⚠️  package.json not found!', colors.yellow);
    process.exit(0);
  }
} catch (error) {
  log(`❌ Error accessing package.json: ${error.message}`, colors.red);
  process.exit(0);
}

// Parse package.json
let packageJson;
try {
  packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
} catch (error) {
  log(`❌ Error parsing package.json: ${error.message}`, colors.red);
  process.exit(0);
}

// Check for ESLint conflicts
let needsFixing = false;
if (packageJson.devDependencies && packageJson.devDependencies.eslint) {
  const eslintVersion = packageJson.devDependencies.eslint;
  
  // Check if using ESLint 9.x with Next.js
  if (eslintVersion.includes('^9') && packageJson.devDependencies['eslint-config-next']) {
    log('⚠️  Detected ESLint 9.x which is incompatible with eslint-config-next!', colors.yellow);
    log('🔧 Fixing ESLint version to 8.57.0...', colors.green);
    
    // Update package.json with fixed ESLint version
    packageJson.devDependencies.eslint = '~8.57.0';
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
    
    needsFixing = true;
  }
}

// Run npm install if we fixed something
if (needsFixing) {
  log('📦 Running npm install to apply dependency fixes...', colors.cyan);
  try {
    execSync('npm install eslint@8.57.0 --save-dev', { stdio: 'inherit' });
    log('✅ Dependencies fixed successfully!', colors.green);
  } catch (error) {
    log(`❌ Error fixing dependencies: ${error.message}`, colors.red);
    log('Please run "npm run reinstall" manually to fix dependency issues.', colors.yellow);
  }
} else {
  log('✅ No known dependency conflicts found!', colors.green);
}
