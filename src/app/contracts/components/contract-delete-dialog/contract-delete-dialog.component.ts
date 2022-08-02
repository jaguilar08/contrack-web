import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contract-delete-dialog',
  templateUrl: './contract-delete-dialog.component.html',
  styleUrls: ['./contract-delete-dialog.component.css']
})
export class ContractDeleteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ContractDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void { }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
