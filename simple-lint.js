#!/usr/bin/env node
const { ESLint } = require('eslint');
const path = require('path');

async function main() {
  console.log('Running simplified ESLint check...');
  
  try {
    // For ESLint v9, which requires a flat config
    const eslint = new ESLint({
      fix: true
    });

    const results = await eslint.lintFiles(['app/**/*.{js,jsx,ts,tsx}']);
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);
    
    console.log(resultText || 'No linting errors found!');
    
    // Write fixes
    await ESLint.outputFixes(results);
  } catch (error) {
    console.error('ESLint error:', error.message);
    console.log('Trying alternative approach...');
    
    // Let's try running next lint directly
    try {
      const { execSync } = require('child_process');
      console.log(execSync('npx next lint --dir app', { encoding: 'utf8' }));
      console.log('Next.js linting completed successfully!');
    } catch (nextError) {
      console.error('Next.js linting failed:', nextError.message);
      process.exit(1);
    }
  }
}

main().catch(error => {
  console.error('Error running linting:', error);
  process.exit(1);
});

main().catch(error => {
  console.error('Error running ESLint:', error);
  process.exit(1);
});
