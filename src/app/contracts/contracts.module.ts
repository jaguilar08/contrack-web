import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { SharedModule } from '../shared/shared.module';


import { ContractDeleteDialogComponent } from './components/contract-delete-dialog/contract-delete-dialog.component';
import { ContractsConfigDialogComponent } from './components/contracts-config-dialog/contracts-config-dialog.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [


    ContractDeleteDialogComponent,
    ContractsConfigDialogComponent
  ],
  imports: [

    CommonModule,
    ContractsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ContractsModule { }
