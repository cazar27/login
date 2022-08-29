import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { AlertComponent } from 'src/app/components/alert/alert.component';
import { ValidatorService } from 'src/app/services/validators/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  btnText = 'Acceder';
  switcherText = 'Recordar';
  imgProfile = '/assets/img/logo.jpg';
  hide = true;

  // create de formGroup with validations of each field
  myForm: FormGroup = this._fb.group({
    email: ['', [Validators.required, Validators.pattern(this._validatorService.emailPattern)]],
    pwd: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    public dialog: MatDialog,
    private _fb: FormBuilder,
    private _validatorService: ValidatorService
  ) { }

  emailErrorMsg(): string {
    // the messege error by type error
    const errors = this.myForm.get('email')?.errors;
    if (errors?.['required']) {
      return 'Email es obligatorio';
    } else if (errors?.['pattern']) {
      return 'No es un email valido';
    } else {
      return '';
    }
  }


  fieldNotValid(campo: string) {
    // if field is not falid make focus
    return this.myForm.get(campo)?.invalid
      && this.myForm.get(campo)?.touched;
  }

  openDialog(title: string, desc: string): void {
    this.dialog.open(AlertComponent, {
      width: '18rem',
      data: { title, desc },
    })
  }

  submitForm() {
    // fun asoc with submit form
    this.myForm.markAllAsTouched();
    let title: string, desc: string;
    if (this.myForm.valid) {
      console.log('ok');
      title = 'Enhorabuena';
      desc = 'Completado el formulario correctamente, pulse aceptar para continuar';
      this.openDialog(title, desc);
    } else {
      title = 'Lo sentimos';
      desc = 'Debe rellenar los campos correctamente antes de continuar';
      this.openDialog(title, desc);
    }
  }

  ngOnInit(): void {
    //init value of field forms
    this.myForm.reset({
      email: '',
      pwd: '',
    });
  }

}
