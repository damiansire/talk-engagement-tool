import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeGiverComponent } from './prize-giver.component';

describe('PrizeGiverComponent', () => {
  let component: PrizeGiverComponent;
  let fixture: ComponentFixture<PrizeGiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizeGiverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizeGiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
