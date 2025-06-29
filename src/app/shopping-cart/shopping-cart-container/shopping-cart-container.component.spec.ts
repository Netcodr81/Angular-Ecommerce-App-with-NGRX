import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";

import { ShoppingCartContainerComponent } from "./shopping-cart-container.component";

describe("ShoppingCartContainerComponent", () => {
  let component: ShoppingCartContainerComponent;
  let fixture: ComponentFixture<ShoppingCartContainerComponent>;

  const initialState = {
    shop: {
      products: [],
      cart: [],
    },
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ShoppingCartContainerComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
