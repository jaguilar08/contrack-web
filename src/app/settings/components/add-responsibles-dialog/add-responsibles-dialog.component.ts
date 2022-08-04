import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Responsible } from '../../models/Responsible';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-add-responsibles-dialog',
  templateUrl: './add-responsibles-dialog.component.html',
  styleUrls: ['./add-responsibles-dialog.component.css']
})
export class AddResponsiblesDialogComponent implements OnInit {
  isValid: boolean = false;
  isTouched: boolean = false;
  form: FormGroup = this._fb.group({
    name: ['', [Validators.required]]
  });
  isNewResponsible: boolean = this.data ? false : true;
  constructor(
    private settingsService: SettingsService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddResponsiblesDialogComponent>,
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Responsible
  ) { }

  ngOnInit(): void {
    this.form.reset({
      name: this.data?.name
    })
  }

  postField() {
    if (this.isNewResponsible) {
      this.addResponsible();
    } else {
      this.editResponsible();
    }
  }

  hasError(field: string): boolean {
    return this.form.get(field)?.invalid
      && this.form.get(field)?.touched || false;
  }

  editResponsible() {
    const dialogData = {
      title: 'Edit Responsible',
      message: `Are you sure? You're about to edit a responsible.`
    }
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: 'auto',
      height: 'auto',
      data: dialogData
    })
    dialogRef.afterClosed().subscribe({
      next: (resp) => {
        if (resp) {
          this.settingsService.updateResponsible(this.data._id, this.form.value.name).subscribe({
            next: (resp) => {
              this.dialogRef.close(true)
            }
          })
        }
      }
    })
  }

  addResponsible() {
    const dialogData = {
      title: 'Add Responsible',
      message: `Are you sure? You're about to add a responsible.`
    }
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: 'auto',
      height: 'auto',
      data: dialogData
    })
    dialogRef.afterClosed().subscribe({
      next: (resp) => {
        if (resp) {
          this.settingsService.createResponsibles(this.form.value.name).subscribe({
            next: (resp) => {
              this.dialogRef.close(resp)
            }
          })
        }
      }
    })
  }
}
