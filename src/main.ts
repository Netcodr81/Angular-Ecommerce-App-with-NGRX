import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PagesModule } from './app/pages/pages.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app/store/app.reducer';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, PagesModule, StoreModule.forRoot(reducers)),
        provideRouter(appRoutes),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
