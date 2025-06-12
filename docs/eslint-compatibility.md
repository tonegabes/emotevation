# ESLint Version Compatibility Notes

## Problem

The project encountered a dependency conflict with ESLint versions:

- ESLint v9.28.0 was specified in package.json
- eslint-config-next requires ESLint v7.23.0 or v8.x.x
- This incompatibility causes build failures in the GitHub workflow

## Solution

The following changes were made to fix this issue:

1. **Package.json changes:**
   - Updated ESLint from v9.28.0 to v8.57.0 
   - Added an override for ESLint in package.json to enforce v8.57.0

2. **GitHub Workflow changes:**
   - Added a specific step to fix ESLint dependencies before building
   - Modified the build step to fall back to compatible ESLint versions if build fails
   - Added NODE_OPTIONS with increased memory allocation

3. **Dependency checks:**
   - Updated the check-dependencies.js script to detect and prevent ESLint v9.x

## Manual Fix

If you encounter this issue during local development, run:

```bash
npm uninstall eslint
npm install eslint@8.57.0 --save-dev
```

## Future Prevention

The ESLint version is now pinned in package.json overrides to prevent accidental upgrades to incompatible versions. This configuration will be maintained until eslint-config-next is updated to support ESLint v9.x.
