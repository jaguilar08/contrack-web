import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  pieChart1Title: string = "Active Contracts [Qty]";
  designedTotal: number = 234567;
  pieChart2Title: string = "Active Contracts [Money]";
  titleQty: string = "Contracs by Type [Qty]";
  titleMoney: string = "Contracs by Type [Money]";
  titleResponsibleQty: string = "Contracs by Reponsible - Top 10 [Qty]";
  titleResponsibleMoney: string = "Contracs by Reponsible - Top 10 [Money]";
  activeContracts: boolean = false;
  months: string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DEC'];
  selectedMonth: string = this.months[ moment().month()];
  orangeScheme: Color = {
    name: 'orangeChart',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#F59E0B'],
  };

  purpleScheme: Color = {
    name: 'purpleChart',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#6366F1'],
  };

  greenScheme: Color = {
    name: 'greenChart',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#10B981'],
  };

  singlePieQty = [
    {
      "name": "WALLACE",
      "value": 10
    }
  ]

  singlePieMoney = [
    {
      "name": "WALLACE",
      "value": 123456
    }
  ]

  singleQty = [
    {
      "name": "WALLACE",
      "value": 10
    },
    {
      "name": "HONDA",
      "value": 7
    },
    {
      "name": "JEEP",
      "value": 3
    }
  ];

  singleMoney = [
    {
      "name": "WALLACE",
      "value": 123456
    },
    {
      "name": "HONDA",
      "value": 122396
    },
    {
      "name": "JEEP",
      "value": 50232
    }
  ];

  singleResponsibleQty = [
    {
      "name": "WALLACE",
      "value": 10
    },
    {
      "name": "HONDA",
      "value": 7
    },
    {
      "name": "JEEP",
      "value": 7
    }
  ];

  singleResponsibleMoney = [
    {
      "name": "WALLACE",
      "value": 123456
    },
    {
      "name": "HONDA",
      "value": 122396
    },
    {
      "name": "JEEP",
      "value": 50232
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
