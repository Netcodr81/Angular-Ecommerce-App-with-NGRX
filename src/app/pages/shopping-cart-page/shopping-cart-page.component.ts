import { Component, OnInit } from "@angular/core";
import { ShoppingCartContainerComponent } from "../../shopping-cart/shopping-cart-container/shopping-cart-container.component";

@Component({
  selector: "app-shopping-cart-page",
  templateUrl: "./shopping-cart-page.component.html",
  styleUrls: ["./shopping-cart-page.component.css"],
  imports: [ShoppingCartContainerComponent],
})
export class ShoppingCartPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
