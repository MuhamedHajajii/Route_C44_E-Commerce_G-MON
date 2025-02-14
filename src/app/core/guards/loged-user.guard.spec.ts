import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { logedUserGuard } from './loged-user.guard';

describe('logedUserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logedUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
