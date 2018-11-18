import { TestBed, inject } from '@angular/core/testing';

import { SourveService } from './sourve.service';

describe('SourveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourveService]
    });
  });

  it('should be created', inject([SourveService], (service: SourveService) => {
    expect(service).toBeTruthy();
  }));
});
