import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { of } from 'rxjs';

import { AlertComponent } from 'src/app/components/alert/alert.component';
import { LoginComponent } from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  const router = jasmine.createSpyObj('Router', ['navigate']);
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const dialogMock = {
    acept: () => { },
    close: () => { }
  };

  const dialogReffsSpyObj = jasmine.createSpyObj ({
    afterClosed: of({ ok: true }),
    acept: () => { },
    close: () => { }
  });

  dialogReffsSpyObj.componentInstance = {
    width: '18rem',
    data: {
      title: 'title',
      desc: 'description'
    },
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        AlertComponent
      ],
      imports: [
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: Router, useValue: router } ,
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: { myData: dialogReffsSpyObj.data } }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should call submitForm', () => {
    const spy = spyOn(component, 'submitForm').and.callThrough();
    component.submitForm();
    expect(spy).toHaveBeenCalled();
  });

  it('should call emailErrorMsg', () => {
    const spy = spyOn(component, 'emailErrorMsg').and.callThrough();
    component.emailErrorMsg();
    expect(spy).toHaveBeenCalled();
  });

  it('should call submitForm with form valid data', inject([FormBuilder], ( fb: FormBuilder )  => {
    component.myForm = fb.group({
      email: 'aaaa@es.es',
      pwd: '12345',
    });
    const spy = spyOn(component, 'submitForm').and.callThrough();
    component.submitForm();
    expect(spy).toHaveBeenCalled();
  }));

  it('should call emailErrorMsg with form valid data', inject([FormBuilder], ( fb: FormBuilder )  => {
    component.myForm = fb.group({
      email: 'aaaa@a',
      pwd: '12345',
    });
    const spy = spyOn(component, 'emailErrorMsg').and.callThrough();
    component.emailErrorMsg();
    expect(spy).toHaveBeenCalled();
  }));

  it('should call openDialog', () => {
    const spy = spyOn(component, 'openDialog').and.callThrough();
    component.openDialog('title','description');
    expect(spy).toHaveBeenCalled();
  });

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
