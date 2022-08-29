import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { of } from 'rxjs';

import { AlertComponent } from 'src/app/components/alert/alert.component';
import { LoginComponent } from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
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
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: { myData: dialogReffsSpyObj.data } }
      ]
    })
    .compileComponents();
  });

  beforeEach(inject([FormBuilder], ( fb: FormBuilder) => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.myForm = fb.group({
      email: 'aaaa@es.es',
      pwd: '12345',
    });
    component.emailErrorMsg();
    component.ngOnInit();
    component.submitForm();
    component.myForm = fb.group({
      email: '',
      pwd: '12345',
    });
    component.submitForm();
    fixture.detectChanges();
  }));

  it('should call openDialog', () => {
    const spy = spyOn(component, 'openDialog').and.callThrough();
    component.openDialog('title','description');
    expect(spy).toHaveBeenCalled();
  });

  it('should call emailErrorMsg', () => {
    const spy = spyOn(component, 'emailErrorMsg').and.callThrough();
    component.emailErrorMsg();
    expect(spy).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
