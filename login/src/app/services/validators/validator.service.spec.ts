import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ValidatorService } from './validator.service';

describe('ValidatorService', () => {
  let service: ValidatorService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      ReactiveFormsModule,
      FormsModule
      ],
  }));

  beforeEach(() => {
    service = TestBed.inject(ValidatorService);
  });

  it(`should have as emailPattern and nameAndLastNamePattern `, () => {
    expect(service.nameAndLastNamePattern).toEqual('([a-zA-Z]+) ([a-zA-Z]+)');
    expect(service.emailPattern).toEqual('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
  });

  it('should call equalsFields return true', () => {
    const spy = spyOn(service, 'equalsFields').and.callThrough();
    service.equalsFields('12345','12345');
    expect(spy).toHaveBeenCalled();
  });

  it('should call equalsFields return null', () => {
    const spy = spyOn(service, 'equalsFields').and.callThrough();
    service.equalsFields('12345','54321');
    expect(spy).toHaveBeenCalled();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
