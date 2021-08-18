import { TestBed } from '@angular/core/testing';

import { UserLoginRegisterStatusGuard } from './user-login-register-status.guard';

describe('UserLoginRegisterStatusGuard', () => {
  let guard: UserLoginRegisterStatusGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserLoginRegisterStatusGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
