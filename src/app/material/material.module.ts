import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  exports: [
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatMenuModule
  ]
})
export class MaterialModule { }