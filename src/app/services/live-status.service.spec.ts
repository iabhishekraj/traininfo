import { TestBed, inject } from '@angular/core/testing';

import { LiveStatusService } from './live-status.service';

describe('LiveStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiveStatusService]
    });
  });

  it('should be created', inject([LiveStatusService], (service: LiveStatusService) => {
    expect(service).toBeTruthy();
  }));
});
