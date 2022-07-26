import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  exports: [
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
  ]
})
export class MaterialModule { }
