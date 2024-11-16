import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersAmountComponent } from './players-amount.component';

describe('PlayersAmountComponent', () => {
  let component: PlayersAmountComponent;
  let fixture: ComponentFixture<PlayersAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersAmountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
