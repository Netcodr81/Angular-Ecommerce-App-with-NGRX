import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgFor, NgClass, CommonModule } from "@angular/common";

@Component({
  selector: "app-layout-mode",
  templateUrl: "./layout-mode.component.html",
  styleUrls: ["./layout-mode.component.css"],
  imports: [CommonModule],
})
export class LayoutModeComponent implements OnInit {
  @Input("isActive") isActive: boolean;
  @Input("len") len: number;
  @Output("changeLayout") changeLayout = new EventEmitter<number>();

  constructor() {}

  items = [];

  ngOnInit() {
    for (let i = 0; i < this.len; i++) {
      this.items.push(i);
    }
  }
}
