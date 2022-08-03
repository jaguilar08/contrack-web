import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-responsibles-dialog',
  templateUrl: './add-responsibles-dialog.component.html',
  styleUrls: ['./add-responsibles-dialog.component.css']
})
export class AddResponsiblesDialogComponent implements OnInit {
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  errorText: string = ''
  isValid: boolean = false;
  constructor(

  ) { }

  ngOnInit(): void {
  }

  addField() {
    const name = this.nameInput.nativeElement.value;
    if( name.trim().length == 0 ) {
      this.isValid = false;
      return;
    };
    this.isValid = true;
  }
}
