import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { provideMockStore } from "@ngrx/store/testing";
import { of } from "rxjs";

import { ProductDetailPageComponent } from "./product-detail-page.component";

describe("ProductDetailPageComponent", () => {
  let component: ProductDetailPageComponent;
  let fixture: ComponentFixture<ProductDetailPageComponent>;

  const mockActivatedRoute = {
    params: of({ id: "1" }),
    snapshot: { params: { id: "1" } },
  };

  const initialState = {
    shop: {
      products: [
        {
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
        },
      ],
    },
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ProductDetailPageComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }, provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
