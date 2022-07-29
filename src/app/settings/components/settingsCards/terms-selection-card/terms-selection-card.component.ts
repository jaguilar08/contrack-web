import { Component, OnInit } from '@angular/core';
import { Term } from 'src/app/settings/models/Term';

@Component({
  selector: 'terms-selection-card',
  templateUrl: './terms-selection-card.component.html',
  styleUrls: ['./terms-selection-card.component.css']
})
export class TermsSelectionCardComponent implements OnInit {

  terms: Term[] = [
    { name: 'responsible', status: true }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
