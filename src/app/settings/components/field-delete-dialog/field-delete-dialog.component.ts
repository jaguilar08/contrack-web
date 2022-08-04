import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-field-delete-dialog',
  templateUrl: './field-delete-dialog.component.html',
  styleUrls: ['./field-delete-dialog.component.css']
})
export class FieldDeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FieldDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {

  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
