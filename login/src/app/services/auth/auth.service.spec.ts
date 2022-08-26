import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';

xdescribe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [service]
  }));

  beforeEach(() => {
    service = TestBed.inject(AuthService);
  });

  // it('Test login', () => {
  //   const spy = spyOn(service, 'login').and.callThrough();
  //   service.login('email@mail.com','aaaa');
  //   service.login('','');
  // })

  // it('Test signin', () => {
  //   const spy = spyOn(service, 'signin').and.callThrough();
  //   service.signin('nombre','email@mail.com','aaaa');
  //   service.signin('','','');
  // })

  // it('Test logout', () => {
  //   const spy = spyOn(service, 'logout').and.callThrough();
  //   service.logout();
  // })

  // it('Test validToken', () => {
  //   const spy = spyOn(service, 'validToken').and.callThrough();
  //   service.validToken();
  // })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
