import { TestBed } from '@angular/core/testing';

import { LesssonsService } from './lesssons.service';

describe('LesssonsService', () => {
  let service: LesssonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LesssonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
