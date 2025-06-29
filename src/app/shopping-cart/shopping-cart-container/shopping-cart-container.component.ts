import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import { Product } from "../../core/models/Product";
import { NgIf, NgFor, CommonModule } from "@angular/common";
import { ShoppingCartItemComponent } from "../shopping-cart-item/shopping-cart-item.component";
import { PriceFormatterPipe } from "../../core/pipes/price-formatter.pipe";

@Component({
  selector: "app-shopping-cart-container",
  templateUrl: "./shopping-cart-container.component.html",
  styleUrls: ["./shopping-cart-container.component.css"],
  imports: [CommonModule, ShoppingCartItemComponent, PriceFormatterPipe],
})
export class ShoppingCartContainerComponent implements OnInit {
  totalPrice: number;
  cart: Product[];

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.store.select("shop").subscribe((shop) => {
      this.totalPrice = shop.cart.reduce((count, curItem) => {
        return count + curItem.quantity * curItem.price;
      }, 0);

      this.cart = shop.cart;
    });
  }
}
