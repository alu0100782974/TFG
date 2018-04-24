import { TestBed, inject } from '@angular/core/testing';

import { TrucksServiceService } from './trucks-service.service';

describe('TrucksServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrucksServiceService]
    });
  });

  it('should be created', inject([TrucksServiceService], (service: TrucksServiceService) => {
    expect(service).toBeTruthy();
  }));
});
