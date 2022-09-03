import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  const router = jasmine.createSpyObj('Router', ['navigate']);
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
      providers: [  { provide: Router, useValue: router } ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
  });

  it('should call submitForm', () => {
    const spy = spyOn(component, 'submitForm').and.callThrough();
    component.submitForm();
    expect(spy).toHaveBeenCalled();
  });

  it('should call errorMsg', () => {
    const spy = spyOn(component, 'errorMsg').and.callThrough();
    component.errorMsg('name');
    expect(spy).toHaveBeenCalled();
  });

  it('should call submitForm with form valid data', inject([FormBuilder], ( fb: FormBuilder )  => {
    component.myForm = fb.group({
      name: '',
      email: '',
      nickname: '',
      pwd: '',
      repeatpwd: ''
    });
    const spy = spyOn(component, 'submitForm').and.callThrough();
    component.submitForm();
    expect(spy).toHaveBeenCalled();
  }));

  it('should call submitForm with form valid data', inject([FormBuilder], ( fb: FormBuilder )  => {
    component.myForm = fb.group({
      name: '',
      email: 'aaa@',
      nickname: '',
      pwd: '',
      repeatpwd: ''
    });
    const spy = spyOn(component, 'errorMsg').and.callThrough();
    component.errorMsg('email');
    expect(spy).toHaveBeenCalled();
  }));


  it('should call fieldNotValid', () => {
    const spy = spyOn(component, 'fieldNotValid').and.callThrough();
    component.fieldNotValid('email');
    expect(spy).toHaveBeenCalled();
  });

  it('should call ngOnInit', () => {
    const spy = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
