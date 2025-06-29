import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import { ClearBrandFilter, RemoveBrandFromFilter } from "../../store/brand-filter/brand-filter.action";
import { ClearOrderBy } from "../../store/price-filter/price-filter.action";
import { BrandFilterComponent } from "../../filters/brand-filter/brand-filter.component";
import { PriceFilterComponent } from "../../filters/price-filter/price-filter.component";
import { ProductListComponent } from "../../products/product-list/product-list.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  imports: [BrandFilterComponent, PriceFilterComponent, ProductListComponent],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new ClearOrderBy());
    this.store.dispatch(new ClearBrandFilter());
  }
}
