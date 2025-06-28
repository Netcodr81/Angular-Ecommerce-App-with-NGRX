# Angular 7 to 8 Upgrade Instructions

## Overview
This guide will help you upgrade your Angular ecommerce application from version 7 to version 8.

## Pre-upgrade Steps

1. **Backup your project**
   ```powershell
   # Create a backup of your current project
   xcopy "f:\Angular-Ecommerce-App-with-NGRX" "f:\Angular-Ecommerce-App-with-NGRX-backup" /E /I
   ```

2. **Commit your current changes**
   ```powershell
   git add .
   git commit -m "Pre-Angular 8 upgrade backup"
   ```

## Upgrade Steps

### 1. Clean install dependencies
```powershell
# Remove node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json

# Install new dependencies
npm install
```

### 2. Run Angular Update Tool (Alternative method)
```powershell
# Install Angular CLI globally if not already installed
npm install -g @angular/cli@8

# Use ng update for automated migration
ng update @angular/cli@8 @angular/core@8
ng update @ngrx/store@8
```

## Key Changes in Angular 8

### 1. **Dynamic Imports** - Lazy loading syntax has changed
**Before (Angular 7):**
```typescript
const routes: Routes = [
  { path: 'feature', loadChildren: './feature/feature.module#FeatureModule' }
];
```

**After (Angular 8):**
```typescript
const routes: Routes = [
  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }
];
```

### 2. **Bundle Budgets** - Already updated in angular.json

### 3. **Differential Loading** - Automatically handled by Angular 8

### 4. **Web Workers** - New support (optional upgrade)

## Updated Dependencies

### Production Dependencies:
- Angular: 7.2.0 → 8.2.14
- NgRx Store: 7.3.0 → 8.6.0
- NgRx Store DevTools: 3.2.4 → 8.6.0
- Core-js: 2.5.4 → 3.6.5
- RxJS: 6.3.3 → 6.4.0
- Zone.js: 0.8.26 → 0.9.1

### Development Dependencies:
- Angular CLI: 7.3.5 → 8.3.25
- TypeScript: 3.9.10 → 3.5.3
- Codelyzer: 4.5.0 → 5.0.0

## Post-Upgrade Testing

1. **Build the application**
   ```powershell
   ng build
   ```

2. **Run tests**
   ```powershell
   ng test
   ng e2e
   ```

3. **Start development server**
   ```powershell
   ng serve
   ```

## Common Issues and Solutions

### 1. **Lazy Loading Routes**
If you have lazy-loaded routes, update them to use dynamic imports as shown above.

### 2. **NgRx Store Issues**
NgRx 8 has better type safety. You might need to update your reducers and effects.

### 3. **TypeScript Errors**
Angular 8 uses TypeScript 3.5. Some type definitions might need updates.

### 4. **Bundle Size**
Angular 8 includes differential loading, which creates modern and legacy bundles automatically.

## Verification

After upgrade, verify:
- ✅ Application builds successfully
- ✅ All tests pass
- ✅ Application runs in development mode
- ✅ Production build works
- ✅ All features work as expected

## Rollback Plan

If issues occur:
1. Restore from backup
2. Revert git changes: `git reset --hard HEAD~1`
3. Reinstall original dependencies: `npm install`
