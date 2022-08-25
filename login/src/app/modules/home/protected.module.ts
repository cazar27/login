import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { HomeComponent } from 'src/app/pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
