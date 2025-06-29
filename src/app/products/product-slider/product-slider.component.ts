import { Component, Input, OnInit } from "@angular/core";
import { CommonModule, NgFor } from "@angular/common";

@Component({
  selector: "app-product-slider",
  templateUrl: "./product-slider.component.html",
  styleUrls: ["./product-slider.component.css"],
  imports: [CommonModule],
})
export class ProductSliderComponent implements OnInit {
  @Input("images") images: string[];
  currentImage: string;

  constructor() {}

  ngOnInit() {
    this.currentImage = this.images[0];
  }

  changeImage(n: number): void {
    this.currentImage = this.images[n];
  }

  handleImageChange(): void {}

  handleMouseOut(): void {}
}
