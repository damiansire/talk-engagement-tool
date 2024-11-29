import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleParticipantComponent } from './raffle-participant.component';

describe('RaffleParticipantComponent', () => {
  let component: RaffleParticipantComponent;
  let fixture: ComponentFixture<RaffleParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaffleParticipantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaffleParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
