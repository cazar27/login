import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from 'src/app/pages/auth/auth.component';
import { LoginComponent } from 'src/app/pages/auth/login/login.component';
import { SigninComponent } from '../../pages/auth/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    data: { animation: 1 },
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { animation: 2 }
      },{
        path: 'signin',
        component: SigninComponent,
        data: { animation: 3 }
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
