import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  const dialogMock = {
    open: () => {
      return dialogMock;
    },
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
      declarations: [AlertComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: { myData: dialogReffsSpyObj.data } }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.title = 'title';
    component.description = 'description';
    expect(component.title).toEqual('title');
    expect(component.description).toEqual('description');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
