import { TestBed } from '@angular/core/testing';

import { ApiSeriveService } from './api-serive.service';

describe('ApiSeriveService', () => {
  let service: ApiSeriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSeriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
