import { TestBed, inject } from '@angular/core/testing';

import { ServicesSerivceService } from './services-serivce.service';

describe('ServicesSerivceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesSerivceService]
    });
  });

  it('should be created', inject([ServicesSerivceService], (service: ServicesSerivceService) => {
    expect(service).toBeTruthy();
  }));
});
