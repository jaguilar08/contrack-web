import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddResponsiblesDialogComponent } from '../../add-responsibles-dialog/add-responsibles-dialog.component';

@Component({
  selector: 'terms-setup-card',
  templateUrl: './terms-setup-card.component.html',
  styleUrls: ['./terms-setup-card.component.css']
})
export class TermsSetupCardComponent implements OnInit {

  responsibles: string[] =
    ['Jeff Aguilar', 'Mario Chan', 'Edgar Bezares', 'Carlos Morales', 'Carlos Mendez']

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onAdd() {
    const dialogRef = this.dialog.open(AddResponsiblesDialogComponent,{
      width: 'auto',
      height: 'auto'
    })
    dialogRef.afterClosed().subscribe({
      next: (resp) => {
        if (resp) {
          this.responsibles.push(resp)
        }
      }
    })
  }
  
}
