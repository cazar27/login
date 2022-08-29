import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  const routerMock = jasmine.createSpyObj('Router', ['home']);
  const authMock = jasmine.createSpyObj('AuthenticationService', ['']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should call canActivate()', () => {
    const spy = spyOn(guard, 'canActivate').and.callThrough();
    guard.canActivate(routerMock, authMock);
    expect(spy).toHaveBeenCalled();
  });

  it('should call canLoad()', () => {
    const spy = spyOn(guard, 'canLoad').and.callThrough();
    guard.canLoad(routerMock, authMock);
    expect(spy).toHaveBeenCalled();
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
