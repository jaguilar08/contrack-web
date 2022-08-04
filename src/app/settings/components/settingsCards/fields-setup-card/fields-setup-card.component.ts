import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Responsible } from 'src/app/settings/models/Responsible';
import { SettingsService } from 'src/app/settings/services/settings.service';
import { AddResponsiblesDialogComponent } from '../../add-responsibles-dialog/add-responsibles-dialog.component';
import { FieldDeleteDialogComponent } from '../../field-delete-dialog/field-delete-dialog.component';

@Component({
  selector: 'fields-setup-card',
  templateUrl: './fields-setup-card.component.html',
  styleUrls: ['./fields-setup-card.component.css']
})
export class FieldsSetupCardComponent implements OnInit {

  responsibles: Responsible[] =
    [{name: 'Jeff Aguilar', _id: '1'}, {name: 'Mario Chan', _id: '2'}, {name: 'Edgar Bezares', _id: '3'}, {name: 'Carlos Morales', _id: '4'}, {name: 'Carlos Medez', _id: '5'}]

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private settingsService: SettingsService
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

  onDelete(responsible: Responsible) {
    this.dialog.open(FieldDeleteDialogComponent, {
      width: '250px',
      data: {
        title: 'Delete Contract',
      }, disableClose: false,
    }).afterClosed().subscribe({
      next: (wasConfirm) => {
        if (!wasConfirm) return;
        this.snackBar.open(`Removing contract`, 'X');
        this.responsibles = this.responsibles.filter(
          ({ _id }) => responsible._id != _id
        );
        this.snackBar.open(
          `Contract successfully removed!`,
          'X'
        );
      },
    });
  }
  
}
