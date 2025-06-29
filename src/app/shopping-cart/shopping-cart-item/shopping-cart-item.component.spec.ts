import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";

import { ShoppingCartItemComponent } from "./shopping-cart-item.component";

describe("ShoppingCartItemComponent", () => {
  let component: ShoppingCartItemComponent;
  let fixture: ComponentFixture<ShoppingCartItemComponent>;

  const initialState = {
    shop: {
      products: [],
      cart: [],
    },
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ShoppingCartItemComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartItemComponent);
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
