import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortPriceListComponent } from './sort-price-list.component';

describe('SortPriceListComponent', () => {
  let component: SortPriceListComponent;
  let fixture: ComponentFixture<SortPriceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortPriceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
