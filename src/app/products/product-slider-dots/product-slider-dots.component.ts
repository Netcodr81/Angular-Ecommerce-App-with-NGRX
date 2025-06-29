import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { CommonModule, NgFor } from "@angular/common";

@Component({
  selector: "app-product-slider-dots",
  templateUrl: "./product-slider-dots.component.html",
  styleUrls: ["./product-slider-dots.component.css"],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
})
export class ProductSliderDotsComponent implements OnInit {
  @Input("len") len: number;
  @Input("activeItem") activeItem: number;
  @Output("changeItem") changeItem = new EventEmitter<number>();

  dots = [];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < this.len; i++) {
      this.dots.push(i);
    }
  }
}
