import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatProgressBarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatProgressBarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class MaterialModule { }
