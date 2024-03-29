import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { MaterialModule } from './material.module';

import { AuthComponent } from 'src/app/pages/auth/auth.component';
import { LoginComponent } from 'src/app/pages/auth/login/login.component';
import { SigninComponent } from 'src/app/pages/auth/signin/signin.component';

import { AlertComponent } from 'src/app/components/alert/alert.component';
import { AvatarProfileComponent } from 'src/app/components/avatar-profile/avatar-profile.component';
import { SwitcherComponent } from 'src/app/components/switcher/switcher.component';
import { ButtonComponent } from 'src/app/components/button/button.component';

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    AuthComponent,
    AlertComponent,
    ButtonComponent,
    SwitcherComponent,
    AvatarProfileComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MaterialModule,
  ]
})
export class AuthModule { }
