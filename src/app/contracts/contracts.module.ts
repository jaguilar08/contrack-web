import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { SharedModule } from '../shared/shared.module';


import { ContractDetailsDialogComponent } from './components/contract-details-dialog/contract-details-dialog.component';
import { ContractEditDialogComponent } from './components/contract-edit-dialog/contract-edit-dialog.component';
import { ContractDeleteDialogComponent } from './components/contract-delete-dialog/contract-delete-dialog.component';



@NgModule({
  declarations: [

    ContractDetailsDialogComponent,
    ContractEditDialogComponent,
    ContractDeleteDialogComponent
  ],
  imports: [

    CommonModule,
    ContractsRoutingModule,
    SharedModule
  ]
})
export class ContractsModule { }
