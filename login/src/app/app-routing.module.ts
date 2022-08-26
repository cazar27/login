import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then( m => m.AuthModule )
  },
  // fix home path
  // {
  //   path: 'home',
  //   loadChildren: () => import('./modules/home/protected.module').then( m => m.ProtectedModule ),
  //   canActivate: [AuthGuard],
  //   canLoad: [AuthGuard],
  // },
  {
    path: '**',
    redirectTo: 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }