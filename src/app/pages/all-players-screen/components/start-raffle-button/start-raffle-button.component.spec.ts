import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRaffleButtonComponent } from './start-raffle-button.component';

describe('StartRaffleButtonComponent', () => {
  let component: StartRaffleButtonComponent;
  let fixture: ComponentFixture<StartRaffleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartRaffleButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartRaffleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
