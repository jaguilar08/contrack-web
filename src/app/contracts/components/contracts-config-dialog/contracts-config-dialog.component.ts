import { Component, Inject, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Field } from 'src/app/shared/models/Field';
import { ContractsService } from '../../services/contracts.service';

@Component({
  selector: 'app-contracts-config-dialog',
  templateUrl: './contracts-config-dialog.component.html',
  styleUrls: ['./contracts-config-dialog.component.css']
})
export class ContractsConfigDialogComponent implements OnInit {

  fields: Field[] = [];

  displayfields: Field[] = [];


  constructor(public dialogRef: MatDialogRef<ContractsConfigDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _contractsService: ContractsService) { }




  ngOnInit(): void {
    this._contractsService.getFields().subscribe({
      next: (data: Field[]) => (this.fields = data),
      complete: () => {
        console.log(this.fields);
        this.fields.forEach((x) => {
          if (x.field_status === "required") {
            this.displayfields.push(x);
          }
        })
        console.log(this.displayfields);

      }
    });
  }

  setChecked(field: Field, event: MatCheckboxChange) {

    if (event.checked == true) {

    }

  }



}
