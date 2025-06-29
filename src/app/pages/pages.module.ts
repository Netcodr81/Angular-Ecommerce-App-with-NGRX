import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';

import {RouterModule} from '@angular/router';
import {pagesRoute} from './pages.route';



@NgModule({
    imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(pagesRoute),
    HomeComponent, ProductDetailPageComponent, ShoppingCartPageComponent
],
    exports: [RouterModule]
})
export class PagesModule { }
