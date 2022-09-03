import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ValidatorService } from 'src/app/services/validators/validator.service';
//import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  btnText = 'Registrarse';
  imgProfile = '/assets/img/logo.jpg';
  hide = true;
  hideRepeat = true;

  // create de formGroup with validations of each field
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.nameAndLastNamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    nickname: ['', [Validators.required, this.validatorService.noStrider]],
    pwd: ['', [Validators.required, Validators.minLength(5)]],
    repeatpwd: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.equalsFields('pwd', 'repeatpwd')]
  });

  // get the messege error by type error
  errorMsg(field: string): string {

    const errors = this.myForm.get(field)?.errors;
    if (errors?.['required']) {
      return `${field} es un campo obligatorio`;
    } else if (errors?.['pattern']) {
      return `No es un ${field} valido`;
    } else {
      return '';
    }
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private validatorService: ValidatorService
    //private authService: AuthService,
  ) { }

  // init value of field forms
  ngOnInit(): void {
    this.myForm.reset({
      name: 'Carlos Zamorano',
      email: 'carlos@mail.com',
      nickname: 'carlos_zr',
      pwd: '12345Car',
      repeatpwd: '12345Car'
    })
  }

  // if field is not falid make focus
  fieldNotValid(campo: string) {
    return this.myForm.get(campo)?.invalid
      && this.myForm.get(campo)?.touched;
  }

  // fun asoc with submit form
  submitForm() {
    this.myForm.markAllAsTouched();
    const { name, email, nickname, pwd } = this.myForm.value;

    if(this.myForm.valid) {
      console.log('ok');
      console.log('usuario registrado: ' + email);
    } else {
      console.log('el formulario no es valido')
    }

  }
}
