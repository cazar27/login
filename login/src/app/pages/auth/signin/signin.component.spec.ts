import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SigninComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(inject([FormBuilder], ( fb: FormBuilder) => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    component.myForm = fb.group({
      name: '',
      email: '',
      nickname: '',
      pwd: '',
      repeatpwd: ''
    });

    component.errorMsg('email');
    component.ngOnInit();
    component.submitForm();
    component.myForm = fb.group({
      name: 'Carlos Zamorano',
      email: 'test@pruebatecnica.com',
      nickname: 'carlos_zr',
      pwd: '1234Prueba',
      repeatpwd: '1234Prueba'
    });
    component.submitForm();
    fixture.detectChanges();
  }));

  it('should call errorMsg', () => {
    const spy = spyOn(component, 'errorMsg').and.callThrough();
    component.errorMsg('name');
    expect(spy).toHaveBeenCalled();
  });

  it('should call errorMsg', () => {
    const spy = spyOn(component, 'errorMsg').and.callThrough();
    component.errorMsg('nickname');
    expect(spy).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
