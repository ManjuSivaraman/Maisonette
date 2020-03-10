import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsDressesProductDetailviewComponent } from './girls-dresses-product-detailview.component';

describe('GirlsDressesProductDetailviewComponent', () => {
  let component: GirlsDressesProductDetailviewComponent;
  let fixture: ComponentFixture<GirlsDressesProductDetailviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlsDressesProductDetailviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsDressesProductDetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
