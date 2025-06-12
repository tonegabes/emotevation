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

// Known problematic packages
const knownIssues = [
  {
    name: 'glob',
    requiredVersion: '^10.3.10',
    minNodeVersion: 18,
    maxNodeVersion: 22,
    checkFunction: (pkg) => {
      const nodeVersion = process.version.match(/^v(\d+)/)[1];
      
      // If the glob version is 11+ and node version is < 20, we need to fix it
      if (pkg.devDependencies && pkg.devDependencies.glob) {
        const globVersion = pkg.devDependencies.glob;
        if (globVersion.startsWith('^11') && parseInt(nodeVersion) < 20) {
          log(`⚠️ Found incompatible glob ${globVersion} with Node.js ${process.version}`, colors.yellow);
          return true;
        }
      }
      return false;
    },
    fix: () => {
      try {
        log('🔧 Downgrading glob to a compatible version...', colors.blue);
        execSync('npm install glob@10.3.10 --save-dev --no-fund --quiet');
        return true;
      } catch (error) {
        log(`❌ Failed to fix glob version: ${error.message}`, colors.red);
        return false;
      }
    }
  }
];

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
  const nextConfigVersion = packageJson.devDependencies['eslint-config-next'];
  
  // Check for specific version conflicts
  if (nextConfigVersion && nextConfigVersion.includes('14.')) {
    // For Next.js 14, recommend ESLint v9 (use latest)
    if (!eslintVersion.includes('9.')) {
      log('⚠️  ESLint version may be incompatible with Next.js 14!', colors.yellow);
      log('🔧 Fixing ESLint version to ^9.28.0...', colors.green);
      
      // Update package.json with fixed ESLint version
      packageJson.devDependencies.eslint = '^9.28.0';
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
      
      needsFixing = true;
    }
  }
}

// Check for glob compatibility issues
for (const issue of knownIssues) {
  if (issue.checkFunction(packageJson)) {
    log(`🔧 Fixing ${issue.name} dependency...`, colors.green);
    if (issue.fix()) {
      needsFixing = true;
    }
  }
}

// Run npm install if we fixed something
if (needsFixing) {
  log('📦 Running npm install to apply dependency fixes...', colors.cyan);
  try {
    execSync('npm install eslint@9.28.0 --save-dev', { stdio: 'inherit' });
    log('✅ Dependencies fixed successfully!', colors.green);
  } catch (error) {
    log(`❌ Error fixing dependencies: ${error.message}`, colors.red);
    log('Please run "npm run reinstall" manually to fix dependency issues.', colors.yellow);
  }
} else {
  log('✅ No known dependency conflicts found!', colors.green);
}
