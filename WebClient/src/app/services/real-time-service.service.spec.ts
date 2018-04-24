import { TestBed, inject } from '@angular/core/testing';

import { RealTimeService } from './real-time-service.service';

describe('RealTimeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealTimeService]
    });
  });

  it('should be created', inject([RealTimeService], (service: RealTimeService) => {
    expect(service).toBeTruthy();
  }));
});
