import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";

import { PriceFilterComponent } from "./price-filter.component";

describe("PriceFilterComponent", () => {
  let component: PriceFilterComponent;
  let fixture: ComponentFixture<PriceFilterComponent>;

  const initialState = {
    priceFilter: {
      minPrice: 0,
      maxPrice: 1000,
    },
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [PriceFilterComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
