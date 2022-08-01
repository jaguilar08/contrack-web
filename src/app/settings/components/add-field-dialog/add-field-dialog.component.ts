import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
    private dialogRef: MatDialogRef<AddFieldDialogComponent>
  ) { }

  ngOnInit(): void {
    this.form.reset({
      name: '',
      type: 'text',
      status: 'required'
    })
  }

  addField() {
    this.settingsService.createContractFields(
      this.form.value.name,
      this.form.value.status,
      this.form.value.type,
    ).subscribe({
      next: ( resp ) => {
        this.dialogRef.close()
      }
    })
  }
}
