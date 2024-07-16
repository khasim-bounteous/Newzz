import { TestBed } from '@angular/core/testing';

import { HeadlinesService } from './headlines.service';

describe('HeadlinesService', () => {
  let service: HeadlinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadlinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
