import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';

import { AlertComponent } from './alert.component';

xdescribe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

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
      declarations: [AlertComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.title).toEqual('title');
    expect(component.description).toEqual('description');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
