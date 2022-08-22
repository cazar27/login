import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from 'src/app/pages/auth/auth.component';
import { LoginComponent } from 'src/app/pages/auth/login/login.component';
import { SigninComponent } from '../../pages/auth/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },{
        path: 'signin',
        component: SigninComponent
      },{
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
