import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/settings/models/Category';

@Component({
  selector: 'contract-category',
  templateUrl: './contract-category.component.html',
  styleUrls: ['./contract-category.component.css']
})
export class ContractCategoryComponent implements OnInit {
  isLoading: boolean = false;
  categorys: Category[] = [{_id:"",name:""},{_id:"",name:""}]
  constructor() { }

  ngOnInit(): void {
  }

}
