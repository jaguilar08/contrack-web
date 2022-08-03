import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contracts-config-dialog',
  templateUrl: './contracts-config-dialog.component.html',
  styleUrls: ['./contracts-config-dialog.component.css']
})
export class ContractsConfigDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContractsConfigDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }



}
