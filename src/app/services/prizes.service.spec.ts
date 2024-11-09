import { TestBed } from '@angular/core/testing';

import { PrizesService } from './prizes.service';

describe('PrizesService', () => {
  let service: PrizesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrizesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
