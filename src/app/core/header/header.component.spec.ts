import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { provideRouter } from "@angular/router";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { of } from "rxjs";

// Mock Store
const mockStore = {
  select: jest.fn(() => of({ cart: [] })),
  dispatch: jest.fn(),
  pipe: jest.fn(() => of({ cart: [] })),
};

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [{ provide: Store, useValue: mockStore }, provideRouter([])],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
