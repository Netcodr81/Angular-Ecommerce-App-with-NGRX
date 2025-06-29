# Angular 12 Upgrade Instructions

## Overview
This guide documents the upgrade from Angular 11 to Angular 12 for your ecommerce application.

## Key Changes in Angular 12

### 1. **Major Features**
- **Ivy Everywhere** - View Engine deprecated, Ivy is now the only rendering engine
- **Sass Support for Inline Styles** - Use Sass in component inline styles
- **Webpack 5 Support** - Improved build performance and module federation
- **Strict Mode by Default** - New projects use strict mode (can be disabled)
- **Angular Language Service** - Enhanced IDE support with better type checking

### 2. **Breaking Changes**
- **View Engine Deprecated** - Only Ivy renderer supported
- **--prod Flag Deprecated** - Use `--configuration production` instead
- **Internet Explorer 11 Support Deprecated** - Removed from default supported browsers
- **Minimum Node.js Version** - Node.js 12.20.0 or later required

### 3. **Dependency Updates**

#### Production Dependencies:
- Angular: 11.2.14 → 12.2.16
- NgRx Store: 11.1.1 → 12.5.1
- NgRx Store DevTools: 11.1.1 → 12.5.1
- Bootstrap: 4.6.0 → 5.1.3 (Major version upgrade)
- RxJS: 6.6.0 → 7.4.0 (Major version upgrade)
- TypeScript Library: 2.0.0 → 2.3.1
- Zone.js: 0.11.3 → 0.11.4
- Core-js: 3.8.3 → 3.19.0

#### Development Dependencies:
- Angular CLI: 11.2.19 → 12.2.16
- Angular DevKit Build Angular: 0.1102.19 → 12.2.16
- TypeScript: 4.1.2 → 4.3.5
- Karma: 5.1.0 → 6.3.9
- Jasmine Core: 3.6.0 → 3.10.1
- TS Node: 8.3.0 → 10.4.0
- Removed deprecated packages: `@types/jasminewd2`, `codelyzer`, `jasmine-spec-reporter`, `tslint`

## Configuration Changes Made

### 1. **Package.json Scripts**
```json
{
  "build:prod": "ng build --configuration production"  // Updated from --prod
}
```

### 2. **TypeScript Configuration (tsconfig.json)**
```json
{
  "compilerOptions": {
    "lib": ["es2020", "dom"],  // Updated from es2018
    "noPropertyAccessFromIndexSignature": false  // Relaxed for compatibility
  }
}
```

### 3. **Angular.json Updates**
```json
{
  "budgets": [
    {
      "type": "anyComponentStyle",  // New bundle budget for component styles
      "maximumWarning": "6kb",
      "maximumError": "10kb"
    }
  ]
}
```

### 4. **Removed Deprecated Dependencies**
- **TSLint** → Migrate to ESLint (recommended)
- **Codelyzer** → No longer needed with ESLint
- **Jasmine Spec Reporter** → Use built-in karma reporters

## Installation Steps

1. **Clean install dependencies:**
   ```powershell
   Remove-Item -Recurse -Force node_modules
   Remove-Item -Force package-lock.json
   npm install --legacy-peer-deps
   ```

2. **Build the application:**
   ```powershell
   npm run build
   ```

3. **Run tests:**
   ```powershell
   npm test
   ```

4. **Start development server:**
   ```powershell
   npm start
   ```

## New Angular 12 Features You Can Use

### 1. **Sass Support for Inline Styles**
```typescript
@Component({
  template: '<div class="my-component">Content</div>',
  styles: [`
    $primary-color: #007bff;
    .my-component {
      color: $primary-color;
    }
  `]
})
```

### 2. **Webpack 5 Module Federation**
```typescript
// Enable module federation for micro-frontends
const ModuleFederationPlugin = require("@module-federation/webpack");
```

### 3. **Enhanced Angular Language Service**
- Better type checking in templates
- Improved autocomplete and IntelliSense
- Better error messages

### 4. **Ivy Everywhere Benefits**
- Smaller bundle sizes
- Better tree-shaking
- Improved build performance
- Enhanced debugging

## RxJS 7 Migration Notes

### Major Changes:
1. **toPromise() deprecated** - Use `firstValueFrom()` or `lastValueFrom()`
```typescript
// Before (RxJS 6)
observable.toPromise()

// After (RxJS 7)
firstValueFrom(observable)
lastValueFrom(observable)
```

2. **New operators and improvements**
- Better TypeScript support
- Smaller bundle sizes
- Performance improvements

## Bootstrap 5 Migration Notes

### Major Changes:
1. **jQuery removed** - Bootstrap 5 doesn't require jQuery
2. **Utility classes updated** - Some class names changed
3. **Form controls updated** - New form styling
4. **Grid system enhanced** - New responsive breakpoints

### Common Updates Needed:
```scss
// Update class names
.ml-3 → .ms-3  // margin-left to margin-start
.mr-3 → .me-3  // margin-right to margin-end
.pl-3 → .ps-3  // padding-left to padding-start
.pr-3 → .pe-3  // padding-right to padding-end
```

## Performance Improvements

1. **Build Performance** - Webpack 5 and Ivy optimizations
2. **Bundle Size** - Better tree-shaking and smaller core
3. **Runtime Performance** - Ivy renderer optimizations
4. **Development Experience** - Faster rebuilds and HMR

## Migration Verification

✅ **Completed Tasks:**
- [x] Updated all Angular dependencies to 12.2.16
- [x] Updated NgRx to version 12.5.1
- [x] Updated RxJS to version 7.4.0
- [x] Updated TypeScript to 4.3.5
- [x] Updated Bootstrap to version 5.1.3
- [x] Updated build tools and CLI
- [x] Updated TypeScript configuration
- [x] Added component style budgets
- [x] Updated npm scripts (removed --prod flag)
- [x] Removed deprecated dependencies

## Post-Upgrade Testing Checklist

- [ ] Application builds successfully (`npm run build`)
- [ ] Application serves in development mode (`npm start`)
- [ ] All unit tests pass (`npm test`)
- [ ] E2E tests pass (`npm run e2e`)
- [ ] Production build works (`npm run build:prod`)
- [ ] All application features work correctly
- [ ] No console errors in browser
- [ ] Bootstrap 5 styles render correctly
- [ ] Performance is maintained or improved

## Troubleshooting

### Common Issues:

1. **RxJS 7 Compatibility**
   - Replace `toPromise()` with `firstValueFrom()` or `lastValueFrom()`
   - Update operators that have changed signatures

2. **Bootstrap 5 Styling Issues**
   - Update utility class names
   - Remove jQuery dependencies
   - Update form control classes

3. **TypeScript Errors**
   - Check for stricter type checking
   - Update any deprecated TypeScript features

4. **Build Errors**
   - Clear node_modules and reinstall if needed
   - Check for incompatible third-party packages

## Next Steps

After successful upgrade to Angular 12, you can consider:
1. **Migrating from TSLint to ESLint** - TSLint is deprecated
2. **Adopting Strict Mode** - Better type safety
3. **Using Webpack 5 Features** - Module federation for micro-frontends
4. **Upgrading to Angular 13** - Ivy View Engine removal and Angular Package Format improvements
5. **Adopting Sass inline styles** - Better component encapsulation

## Rollback Plan

If issues occur:
1. Restore from backup: `git reset --hard HEAD~1`
2. Reinstall previous dependencies
3. Revert configuration files to Angular 11 versions
