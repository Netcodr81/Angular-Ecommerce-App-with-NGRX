import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";

import { ProductDetailComponent } from "./product-detail.component";

describe("ProductDetailComponent", () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  const initialState = {
    shop: {
      products: [],
      cart: [],
    },
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ProductDetailComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;

    // Set the required input property
    component.product = {
      id: 1,
      title: "Test Product",
      category: "Electronics",
      images: ["test-image.jpg"],
      brand: "Test Brand",
      price: 100,
      cpu: "Test CPU",
      camera: "Test Camera",
      size: "Test Size",
      weight: "Test Weight",
      display: "Test Display",
      battery: "Test Battery",
      memory: "Test Memory",
      quantity: 1,
      description: "Test Description",
    };

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
