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
    name: ['', [Validators.required]],
    type: ['text', Validators.required],
    status: ['required', Validators.required]
  });
  constructor(
    private _fb: FormBuilder,
    private settingsService: SettingsService,
    private dialogRef: MatDialogRef<AddFieldDialogComponent>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.form.reset({
      name: '',
      type: 'text',
      status: 'required'
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
            this.form.value.name,
            this.form.value.status,
            this.form.value.type,
          ).subscribe({
            next: (resp) => {
              this.dialogRef.close()
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
