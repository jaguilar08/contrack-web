import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { Contract_Overview } from '../../models/ContractOverview';
import { ContractDeleteDialogComponent } from '../contract-delete-dialog/contract-delete-dialog.component';

@Component({
  selector: 'app-contracts-table',
  templateUrl: './contracts-table.component.html',
  styleUrls: ['./contracts-table.component.css']
})
export class ContractsTableComponent implements OnInit {

  constructor(
    private dialog: MatDialog, private snackBar: MatSnackBar,
  ) { }

  contracts: Contract_Overview[] = [
    {
      _id: '1',
      contractor_name: 'Daniel',
      contract_category: 'rent',
      periodicity: 'semesterly',
      contract_value: 12364,
      effective_date: moment(),
      responsible: 'Jeff',
      contract_status: 'active',
    },
    {
      _id: '2',
      contractor_name: 'Hebert',
      contract_category: 'rent',
      periodicity: 'semesterly',
      contract_value: 12364,
      effective_date: moment(),
      responsible: 'Mario',
      contract_status: 'inactive',
    },
    {
      _id: '3',
      contractor_name: 'Edgar',
      contract_category: 'Job',
      periodicity: 'quarterly',
      contract_value: 12364,
      effective_date: moment(),
      responsible: 'Carlos',
      contract_status: 'active',
    },
    {
      _id: '4',
      contractor_name: 'Vale',
      contract_category: 'rent',
      periodicity: 'semesterly',
      contract_value: 12364,
      effective_date: moment(),
      responsible: 'Daniel',
      contract_status: 'active',
    },
    {
      _id: '5',
      contractor_name: 'Phil',
      contract_category: 'rent',
      periodicity: 'semesterly',
      contract_value: 12364,
      effective_date: moment(),
      responsible: 'Jeff',
      contract_status: 'inactive',
    },
  ]

  ngOnInit(): void {


  }


  onDetails(contractData: Contract_Overview) {


  }

  onEdit(contractData: Contract_Overview) {

  }

  onDelete(contractData: Contract_Overview) {
    this.dialog.open(ContractDeleteDialogComponent, {
      hasBackdrop: false,
      data: {
        title: 'Delete Contract',
      }, disableClose: false,
    }).afterClosed().subscribe({
      next: (wasConfirm) => {
        if (!wasConfirm) return;
        this.snackBar.open(`Removing contract`, 'X');
        // this._appService.removeCampaign(contractData).subscribe({
        //   next: () => { },
        //   complete: () => {
        //     this.contracts = this.contracts.filter(
        //       ({ _id }) => contractData._id != _id
        //     );
        //     this.snackBar.open(
        //       `Contract successfully removed!`,
        //       'X'
        //     );
        //   },
        //   error: () => {
        //     this.snackBar.open(
        //       `Something went wrong while removing the contract, please try again`,
        //       'X'
        //     );
        //   },
        // });
      },
    });
  }


}
