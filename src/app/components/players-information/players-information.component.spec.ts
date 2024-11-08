import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersInformationComponent } from './players-information.component';

describe('PlayersInformationComponent', () => {
  let component: PlayersInformationComponent;
  let fixture: ComponentFixture<PlayersInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
