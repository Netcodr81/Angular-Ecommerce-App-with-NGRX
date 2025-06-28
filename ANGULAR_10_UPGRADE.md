# Angular 10 Upgrade Instructions

## Overview
This guide documents the upgrade from Angular 9 to Angular 10 for your ecommerce application.

## Key Changes in Angular 10

### 1. **New Features**
- **New Date Range Picker** - Enhanced Angular Material date picker
- **New Default Browser Configuration** - Excludes older browsers by default
- **New Component Harnesses** - Better testing utilities
- **Angular Material New Components** - New slider component

### 2. **Breaking Changes**
- **CommonJS Import Warnings** - Warnings for CommonJS imports
- **TypeScript 4.0 Support** - Upgraded to TypeScript 4.0
- **Node.js 12+ Required** - Dropped support for Node.js 10

### 3. **Dependency Updates**

#### Production Dependencies:
- Angular: 9.1.13 → 10.2.5
- NgRx Store: 9.2.0 → 10.1.2
- NgRx Store DevTools: 9.2.0 → 10.1.2
- TypeScript Library: 1.13.0 → 2.0.0
- Zone.js: 0.10.3 → 0.10.2
- RxJS: 6.5.5 → 6.6.0
- Bootstrap: 4.5.0 → 4.6.0
- Core-js: 3.6.5 → 3.8.3

#### Development Dependencies:
- Angular CLI: 9.1.15 → 10.2.4
- Angular DevKit Build Angular: 0.901.15 → 0.1002.4
- TypeScript: 3.8.3 → 4.0.2
- Codelyzer: 5.1.2 → 6.0.0
- Jasmine Core: 3.5.0 → 3.6.0
- Jasmine Spec Reporter: 4.2.1 → 5.0.0
- Karma Jasmine: 3.0.1 → 4.0.0
- Karma Coverage Istanbul Reporter: 2.1.0 → 3.0.2

## Configuration Changes Made

### 1. **TypeScript Configuration (tsconfig.json)**
```json
{
  "compilerOptions": {
    "module": "es2020",  // Updated from esnext
    "target": "es2015"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,  // New option
    "strictTemplates": true,  // Enhanced strict mode
    "strictInputAccessModifiers": true  // New strict option
  }
}
```

### 2. **Browserslist Updates**
- Updated comments and formatting
- Better browser support guidance

### 3. **Package.json Scripts**
- All build and test scripts remain compatible
- No changes needed to existing scripts

## Installation Steps

1. **Clean install dependencies:**
   ```powershell
   Remove-Item -Recurse -Force node_modules
   Remove-Item -Force package-lock.json
   npm install
   ```

2. **Build the application:**
   ```powershell
   npx ng build
   ```

3. **Run tests:**
   ```powershell
   npx ng test
   ```

4. **Start development server:**
   ```powershell
   npx ng serve
   ```

## Code Changes Made

### 1. **Component Updates**
- Updated ViewChild decorators with explicit static flags
- Fixed TypeScript strict mode issues with definite assignment assertions (!)

### 2. **Type Safety Improvements**
- All properties now properly typed
- Removed implicit any types
- Added definite assignment assertions where appropriate

## New Angular 10 Features You Can Use

### 1. **Date Range Picker (if using Angular Material)**
```typescript
// New date range picker component
<mat-date-range-input>
  <input matStartDate placeholder="Start date">
  <input matEndDate placeholder="End date">
</mat-date-range-input>
```

### 2. **New Component Test Harnesses**
```typescript
// Better testing with component harnesses
const loader = TestbedHarnessEnvironment.loader(fixture);
const select = await loader.getHarness(MatSelectHarness);
```

### 3. **New ng new Collection**
- Enhanced project creation options
- Better workspace support

## Performance Improvements

1. **Bundle Size Optimization** - Better tree-shaking
2. **Build Performance** - Faster incremental builds
3. **Runtime Performance** - Optimized change detection

## Migration Verification

✅ **Completed Tasks:**
- [x] Updated all Angular dependencies to 10.2.5
- [x] Updated NgRx to version 10.1.2
- [x] Updated TypeScript to 4.0.2
- [x] Updated build tools and CLI
- [x] Fixed ViewChild decorators
- [x] Updated TypeScript configuration
- [x] Fixed strict mode type issues
- [x] Updated browserslist configuration

## Post-Upgrade Testing Checklist

- [ ] Application builds successfully (`npx ng build`)
- [ ] Application serves in development mode (`npx ng serve`)
- [ ] All unit tests pass (`npx ng test`)
- [ ] E2E tests pass (`npx ng e2e`)
- [ ] Production build works (`npx ng build --prod`)
- [ ] All application features work correctly
- [ ] No console errors in browser
- [ ] Performance is maintained or improved

## Troubleshooting

### Common Issues:

1. **TypeScript Errors**
   - Ensure all properties are properly typed
   - Use definite assignment assertions (!) where appropriate
   - Update any custom type definitions

2. **Build Errors**
   - Clear node_modules and reinstall if needed
   - Check for CommonJS import warnings and update to ES modules where possible

3. **Runtime Errors**
   - Check for deprecated API usage
   - Update any third-party library compatibility

## Next Steps

After successful upgrade to Angular 10, you can consider:
1. Upgrading to Angular 11 (introduces Ivy everywhere)
2. Migrating from TSLint to ESLint
3. Adopting new Angular 10 features like the date range picker
4. Optimizing bundle sizes with the new build optimizations

## Rollback Plan

If issues occur:
1. Restore from backup: `git reset --hard HEAD~1`
2. Reinstall previous dependencies
3. Revert configuration files to Angular 9 versions
