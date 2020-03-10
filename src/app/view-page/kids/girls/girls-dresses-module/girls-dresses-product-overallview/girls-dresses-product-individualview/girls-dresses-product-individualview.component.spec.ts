import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsDressesProductIndividualviewComponent } from './girls-dresses-product-individualview.component';

describe('GirlsDressesProductIndividualviewComponent', () => {
  let component: GirlsDressesProductIndividualviewComponent;
  let fixture: ComponentFixture<GirlsDressesProductIndividualviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlsDressesProductIndividualviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsDressesProductIndividualviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
