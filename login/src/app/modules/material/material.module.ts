import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule
  ]
})

export class MaterialModule { }
