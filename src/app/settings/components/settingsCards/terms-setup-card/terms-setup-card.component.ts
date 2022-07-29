import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'terms-setup-card',
  templateUrl: './terms-setup-card.component.html',
  styleUrls: ['./terms-setup-card.component.css']
})
export class TermsSetupCardComponent implements OnInit {

  responsibles: string[] =
    ['Jeff Aguilar', 'Mario Chan', 'Edgar Bezares', 'Carlos Morales', 'Carlos Mendez']

  constructor() { }

  ngOnInit(): void {
  }

  
}
