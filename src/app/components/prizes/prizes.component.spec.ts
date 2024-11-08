import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizesComponent } from './prizes.component';

describe('PrizesComponent', () => {
  let component: PrizesComponent;
  let fixture: ComponentFixture<PrizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
