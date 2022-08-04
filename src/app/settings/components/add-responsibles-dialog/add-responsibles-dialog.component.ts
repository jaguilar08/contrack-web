import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
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
  constructor(
    private settingsService: SettingsService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddResponsiblesDialogComponent>,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  addField() {
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

  hasError(field: string): boolean {
    return this.form.get(field)?.invalid
      && this.form.get(field)?.touched || false;
  }
}
