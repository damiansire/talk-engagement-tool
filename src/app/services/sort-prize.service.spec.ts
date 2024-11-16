import { TestBed } from '@angular/core/testing';

import { SortPrizeService } from './sort-prize.service';

describe('SortPrizeService', () => {
  let service: SortPrizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortPrizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
