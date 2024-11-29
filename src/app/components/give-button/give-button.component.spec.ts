import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveButtonComponent } from './give-button.component';

describe('GiveButtonComponent', () => {
  let component: GiveButtonComponent;
  let fixture: ComponentFixture<GiveButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiveButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
