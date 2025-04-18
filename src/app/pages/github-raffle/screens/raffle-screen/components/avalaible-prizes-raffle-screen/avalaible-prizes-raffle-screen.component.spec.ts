import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalaiblePrizesRaffleScreenComponent } from './avalaible-prizes-raffle-screen.component';

describe('AvalaiblePrizesRaffleScreenComponent', () => {
  let component: AvalaiblePrizesRaffleScreenComponent;
  let fixture: ComponentFixture<AvalaiblePrizesRaffleScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvalaiblePrizesRaffleScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvalaiblePrizesRaffleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
