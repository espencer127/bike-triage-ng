import { TestBed } from '@angular/core/testing';

import { EnvVarService } from './env-var-service';

describe('EnvVarService', () => {
  let service: EnvVarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvVarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
