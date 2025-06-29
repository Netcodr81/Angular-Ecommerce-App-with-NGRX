import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { providePrimeNG } from "primeng/config";
import Aura from "@primeng/themes/aura";

import { appRoutes } from "./app.routes";
import { PagesModule } from "./pages/pages.module";
import { reducers } from "./store/app.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, PagesModule, StoreModule.forRoot(reducers)),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".dark-mode",
          cssLayer: {
            name: "primeng",
            order: "theme, base, primeng",
          },
        },
      },
    }),
  ],
};
