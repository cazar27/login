import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';
import { User } from '../../interfaces/user.interface';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule
    ],
  }));

  beforeEach(() => {
    service = TestBed.inject(AuthService);
  });

  it('should call usuario', () => {
    const result = service.usuario;
    expect(result);
  });

  it('should call login', () => {
    const spy = spyOn(service, 'login').and.callThrough();
    service.login('email@mail.com','aaaa');
    expect(spy).toHaveBeenCalled();
  });

  it('should call signin', () => {
    const spy = spyOn(service, 'signin').and.callThrough();
    service.signin('nombre','email@mail.com','aaaa');
    expect(spy).toHaveBeenCalled();
  });

  it('should call logout', () => {
    const spy = spyOn(service, 'logout').and.callThrough();
    service.logout();
    expect(spy).toHaveBeenCalled();
  })

  it('should call validToken', () => {
    const spy = spyOn(service, 'validToken').and.callThrough();
    service.validToken();
    expect(spy).toHaveBeenCalled();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
