import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromApp from "../../store/app.reducer";
import { Product } from "../../core/models/Product";
import { brandPurePipe } from "../../core/pure-pipes/brand.pure.pipe";
import { orderByPricePurePipe } from "../../core/pure-pipes/order-by-price.pure.pipe";
import { Order } from "../../core/enums/order";
import { NgIf, NgFor, NgClass, CommonModule } from "@angular/common";
import { LayoutModeComponent } from "../../core/layout-mode/layout-mode.component";
import { ProductComponent } from "../product/product.component";
import { PaginationComponent } from "../../pagination/pagination/pagination.component";
import { PaginationPipe } from "../../pagination/pagination.pipe";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
  imports: [CommonModule, LayoutModeComponent, ProductComponent, PaginationComponent, PaginationPipe],
})
export class ProductListComponent implements OnInit {
  shop: { products: Product[]; cart: Product[] };
  products: Product[];

  colValue = "col-lg-4";
  gridValue = 3;
  perPage = 12;
  currentPage = 1;
  pagesToShow = 3;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.store
      .select((state) => {
        return state;
      })
      .subscribe((state) => {
        const brands = state.brandFilter;
        const orderBy = state.orderBy as Order;

        const filterByBrandArr = brandPurePipe(state.shop.products, brands);
        const filterByOrderArr = orderByPricePurePipe(filterByBrandArr, orderBy);

        console.log(state);

        this.products = filterByOrderArr;
        console.log(this);
      });
  }

  onChangeLayout(n: number): void {
    this.gridValue = n;
    if (n === 4) {
      this.colValue = `col-lg-${3}`;
    } else {
      this.colValue = `col-lg-${4}`;
    }
  }

  trackProductById(index: number, product: Product): number {
    return product.id;
  }

  next() {
    this.currentPage++;
  }

  prev() {
    if (this.currentPage === 1) return;
    this.currentPage--;
  }

  goToPage(loc: number): void {
    this.currentPage = loc;
  }
}
