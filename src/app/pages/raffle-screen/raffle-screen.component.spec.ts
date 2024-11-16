import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleScreenComponent } from './raffle-screen.component';

describe('RaffleScreenComponent', () => {
  let component: RaffleScreenComponent;
  let fixture: ComponentFixture<RaffleScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaffleScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaffleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
