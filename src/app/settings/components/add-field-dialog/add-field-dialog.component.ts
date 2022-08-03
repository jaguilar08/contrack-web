import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-add-field-dialog',
  templateUrl: './add-field-dialog.component.html',
  styleUrls: ['./add-field-dialog.component.css']
})
export class AddFieldDialogComponent implements OnInit {
  form: FormGroup = this._fb.group({
    fieldLabel: ['', [Validators.required]],
    fieldType: ['text', Validators.required],
    fieldStatus: ['required', Validators.required]
  });
  constructor(
    private _fb: FormBuilder,
    private settingsService: SettingsService,
    private dialogRef: MatDialogRef<AddFieldDialogComponent>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.form.reset({
      fieldLabel: '',
      fieldType: 'text',
      fieldStatus: 'required'
    })
  }

  addField() {
    this.form.markAllAsTouched();
    const dialogData = {
      title: 'Add Field',
      message: 'Are you sure? This action is irreversible.'
    }
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: 'auto',
      height: 'auto',
      data: dialogData
    })
    dialogRef.afterClosed().subscribe({
      next: (resp) => {
        if (resp) {
          this.settingsService.createContractFields(
            this.form.value.fieldLabel,
            this.form.value.fieldStatus,
            this.form.value.fieldType,
          ).subscribe({
            next: (resp) => {
              this.dialogRef.close(resp)
            }
          })
        }
      }
    })
  }

  hasError(field: string): boolean {
    return this.form.get(field)?.invalid
      && this.form.get(field)?.touched || false;
  }
}
