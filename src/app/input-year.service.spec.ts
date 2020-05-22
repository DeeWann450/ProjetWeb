import { TestBed } from '@angular/core/testing';

import { InputYearService } from './input-year.service';

describe('InputYearService', () => {
  let service: InputYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
