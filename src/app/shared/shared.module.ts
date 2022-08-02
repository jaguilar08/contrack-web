import { CommonModule } from '@angular/common';
import { DialogConfirmComponent } from './components/confirm/confirm.component';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ToDatePipe } from './pipes/to-date.pipe';




@NgModule({
  declarations: [
    DialogConfirmComponent,
    ErrorMsgDirective,
    NavbarComponent,
    ToDatePipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ErrorMsgDirective,
    ToDatePipe
  ]
})
export class SharedModule { }
