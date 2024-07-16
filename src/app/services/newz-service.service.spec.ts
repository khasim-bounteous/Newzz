import { TestBed } from '@angular/core/testing';

import { NewzServiceService } from './newz-service.service';

describe('NewzServiceService', () => {
  let service: NewzServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewzServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
