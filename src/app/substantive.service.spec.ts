import { TestBed } from '@angular/core/testing';

import { SubstantiveService } from './substantive.service';

describe('SubstantiveService', () => {
  let service: SubstantiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubstantiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
