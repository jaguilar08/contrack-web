import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Term } from 'src/app/settings/models/Term';
import { SettingsService } from 'src/app/settings/services/settings.service';
import { AddFieldDialogComponent } from '../../add-field-dialog/add-field-dialog.component';

@Component({
  selector: 'terms-selection-card',
  templateUrl: './terms-selection-card.component.html',
  styleUrls: ['./terms-selection-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TermsSelectionCardComponent implements OnInit {
  isLoading: boolean = false;
  terms: Term[] = [];

  constructor(
    private settingsService: SettingsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {
    this.isLoading = true;
    this.settingsService
      .getContractFields()
      .subscribe({
        next: (fields: Term[]) => {
          this.terms = fields
        },
        complete: () => {
          this.isLoading = false;
        }
      })
  }

  onSave() {
    console.log(this.terms);
  }

  onAdd() {
    const dialogRef = this.dialog.open(AddFieldDialogComponent, {
      width: 'auto',
      height: 'auto',
      autoFocus: false
    })
  }
}
