import { TestBed } from '@angular/core/testing';

import { ThisService } from './this.service';

describe('ThisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThisService = TestBed.get(ThisService);
    expect(service).toBeTruthy();
  });
});
