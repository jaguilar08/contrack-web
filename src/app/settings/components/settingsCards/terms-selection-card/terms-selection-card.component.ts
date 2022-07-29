import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Term } from 'src/app/settings/models/Term';
import { SettingsService } from 'src/app/settings/services/settings.service';

@Component({
  selector: 'terms-selection-card',
  templateUrl: './terms-selection-card.component.html',
  styleUrls: ['./terms-selection-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TermsSelectionCardComponent implements OnInit {

  terms: Term[] = [];

  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {
    this.settingsService
      .getContractFields()
      .subscribe({
        next: (fields: Term[]) => this.terms = fields
      })
  }

  onEdit() {

  }

  onDelete() {

  }

  onAdd() {

  }
}
