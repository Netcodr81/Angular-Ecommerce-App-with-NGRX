import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromApp from "../../store/app.reducer";
import { RouterLink } from "@angular/router";
import { AsyncPipe, CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  imports: [CommonModule, RouterLink],
})
export class HeaderComponent implements OnInit {
  shop: Observable<any>;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.shop = this.store.select("shop");
  }
}
