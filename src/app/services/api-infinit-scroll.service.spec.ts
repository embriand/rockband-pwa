import { TestBed } from '@angular/core/testing';

import { ApiInfinitScrollService } from './api-infinit-scroll.service';

describe('ApiInfinitScrollService', () => {
  let service: ApiInfinitScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInfinitScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
