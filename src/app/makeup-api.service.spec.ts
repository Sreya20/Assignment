import { TestBed } from '@angular/core/testing';

import { MakeupApiService } from './makeup-api.service';

describe('MakeupApiService', () => {
  let service: MakeupApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeupApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
