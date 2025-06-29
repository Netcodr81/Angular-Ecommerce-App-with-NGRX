import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";

import { BrandFilterComponent } from "./brand-filter.component";

describe("BrandFilterComponent", () => {
  let component: BrandFilterComponent;
  let fixture: ComponentFixture<BrandFilterComponent>;

  const initialState = {
    brandFilter: {
      selectedBrands: [],
    },
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [BrandFilterComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
