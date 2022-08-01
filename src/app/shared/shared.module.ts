import { CommonModule } from '@angular/common';
import { DialogConfirmComponent } from './components/confirm/confirm.component';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';




@NgModule({
  declarations: [
    DialogConfirmComponent,
    ErrorMsgDirective,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ErrorMsgDirective
  ]
})
export class SharedModule { }
