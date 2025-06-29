import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../../core/models/Product";
import { Store } from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import { AddProductToCart } from "../../store/shop/shop.action";
import { PriceFormatterPipe } from "../../core/pipes/price-formatter.pipe";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
  imports: [PriceFormatterPipe],
})
export class ProductDetailComponent implements OnInit {
  @Input("product") product: Product;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {}

  onAddProductToCart(): void {
    this.store.dispatch(new AddProductToCart(this.product));
  }
}
