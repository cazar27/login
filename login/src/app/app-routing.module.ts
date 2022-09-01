import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./modules/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/protected.module').then( m => m.ProtectedModule ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
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
