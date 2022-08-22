import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from 'src/app/pages/auth/auth.component';
import { LoginComponent } from 'src/app/pages/auth/login/login.component';
import { SigninComponent } from 'src/app/pages/auth/signin/signin.component';

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
