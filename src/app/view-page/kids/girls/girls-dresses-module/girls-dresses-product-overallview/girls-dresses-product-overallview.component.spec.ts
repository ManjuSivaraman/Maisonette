import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsDressesProductOverallviewComponent } from './girls-dresses-product-overallview.component';

describe('GirlsDressesProductOverallviewComponent', () => {
  let component: GirlsDressesProductOverallviewComponent;
  let fixture: ComponentFixture<GirlsDressesProductOverallviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlsDressesProductOverallviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsDressesProductOverallviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
