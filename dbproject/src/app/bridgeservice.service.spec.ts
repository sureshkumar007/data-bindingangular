import { TestBed } from '@angular/core/testing';

import { BridgeserviceService } from './bridgeservice.service';

describe('BridgeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BridgeserviceService = TestBed.get(BridgeserviceService);
    expect(service).toBeTruthy();
  });
});
