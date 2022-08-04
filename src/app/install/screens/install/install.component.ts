import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.css']
})
export class InstallComponent implements OnInit {
  firstParam: string = '';
  secondParam: string = '';
  thirdParam: string = '';
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.firstParam = params['firstParam'];
        this.secondParam = params['secondParam'];
        this.thirdParam = params['thirdParam'];
      })
  }

}
