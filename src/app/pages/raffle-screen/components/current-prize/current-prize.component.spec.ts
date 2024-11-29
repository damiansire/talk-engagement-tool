import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPrizeComponent } from './current-prize.component';

describe('CurrentPrizeComponent', () => {
  let component: CurrentPrizeComponent;
  let fixture: ComponentFixture<CurrentPrizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentPrizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentPrizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
