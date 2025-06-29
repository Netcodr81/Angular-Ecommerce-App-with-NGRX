import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductSliderComponent } from "./product-slider.component";

describe("ProductSliderComponent", () => {
  let component: ProductSliderComponent;
  let fixture: ComponentFixture<ProductSliderComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ProductSliderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSliderComponent);
    component = fixture.componentInstance;

    // Set the required input property
    component.images = ["test-image1.jpg", "test-image2.jpg"];

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
