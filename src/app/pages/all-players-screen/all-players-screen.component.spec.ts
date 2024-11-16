import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlayersComponent } from './all-players-screen.component';

describe('AllPlayersComponent', () => {
  let component: AllPlayersComponent;
  let fixture: ComponentFixture<AllPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPlayersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
