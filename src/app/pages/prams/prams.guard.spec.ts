import { TestBed, async, inject } from '@angular/core/testing';

import { PramsGuard } from './prams.guard';

describe('PramsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PramsGuard]
    });
  });

  it('should ...', inject([PramsGuard], (guard: PramsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
