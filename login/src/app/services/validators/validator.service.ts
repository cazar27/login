import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nameAndLastNamePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noStrider(control: FormControl): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
      return {
        noStrider: true
      }
    }

    return null;
  }

  equalsFields(fieldFirst: string, fieldSecond: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pwdFirst = formGroup.get(fieldFirst)?.value;
      const pwdSecond = formGroup.get(fieldSecond)?.value;

      if (pwdFirst !== pwdSecond) {
        formGroup.get(fieldSecond)?.setErrors({ notEquals: true });
        return { notEquals: true }
      }
      formGroup.get(fieldSecond)?.setErrors(null);

      return null
    }

  }

}
