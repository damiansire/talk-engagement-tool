import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersHistoryComponent } from './winners-history.component';

describe('WinnersHistoryComponent', () => {
  let component: WinnersHistoryComponent;
  let fixture: ComponentFixture<WinnersHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnersHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnersHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
