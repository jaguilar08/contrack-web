import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { Field } from 'src/app/settings/models/Field';
import { SettingsService } from 'src/app/settings/services/settings.service';
import { AddFieldDialogComponent } from '../../add-field-dialog/add-field-dialog.component';

@Component({
  selector: 'fields-selection-card',
  templateUrl: './fields-selection-card.component.html',
  styleUrls: ['./fields-selection-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FieldsSelectionCardComponent implements OnInit {
  isLoading: boolean = false;
  terms: Field[] = [];
  checklist = new FormArray([]);

  form: FormGroup = this._fb.group({
  })

  constructor(
    private settingsService: SettingsService,
    private dialog: MatDialog,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {
    this.isLoading = true;
    this.settingsService
      .getContractFields()
      .subscribe({
        next: (fields: Field[]) => {
          this.terms = fields
        },
        complete: () => {
          this.isLoading = false;
          this.assignCheckboxValue();
        }
      })
  }

  onAdd() {
    const dialogRef = this.dialog.open(AddFieldDialogComponent, {
      width: 'auto',
      height: 'auto',
      autoFocus: false
    })
    dialogRef.afterClosed().subscribe({
      next: (resp) => {
        if (resp) {
          this.terms.push(resp)
        }
      }
    })
  }

  setChecked(term: Field, event: MatCheckboxChange) {
    if (event.checked === true) {
      this.settingsService
        .updateContractFields(term.field_code, 'required')
        .subscribe({
          next: (res) => { }
        })
    } else {
      this.settingsService
        .updateContractFields(term.field_code, 'additional')
        .subscribe({
          next: (res) => { }
        })
    }
  }

  assignCheckboxValue() {
    this.terms.forEach((term, index) => {
      if (term.field_status === 'required') {
        this.form.addControl(`${index}`, new FormControl(true));
      } else {
        this.form.addControl(`${index}`, new FormControl(false));
      }
    });
  }
}
