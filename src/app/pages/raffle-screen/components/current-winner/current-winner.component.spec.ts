import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWinnerComponent } from './current-winner.component';

describe('CurrentWinnerComponent', () => {
  let component: CurrentWinnerComponent;
  let fixture: ComponentFixture<CurrentWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentWinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
