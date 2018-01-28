import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
