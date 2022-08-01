import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialog-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class DialogConfirmComponent {

  public title = "";
  public message = 'Are you sure?';

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public args: any
  ) { 
    this.title = args.title;
    this.message = args.message;
  }

  /**
   * Accept
   */
  accept() {
    this.dialogRef.close(true);
  }

  /**
   * Cancel
   */
  cancel() {
    this.dialogRef.close(null);
  }
}
