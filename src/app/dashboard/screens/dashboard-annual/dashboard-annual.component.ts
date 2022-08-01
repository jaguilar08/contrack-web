import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard-annual',
  templateUrl: './dashboard-annual.component.html',
  styleUrls: ['./dashboard-annual.component.css']
})
export class DashboardAnnualComponent implements OnInit {
  titleQty: string = "Contracs by Month [Qty]";
  titleMoney: string = "Contracs by Month [Money]";
  titleDuration: string = "Contracs by Duration [Qty]";
  titleValueRange: string = "Contracs by Value Range [Qty]";
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

  redScheme: Color = {
    name: 'greenChart',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#EF4444'],
  };

  singleQty = [
    {
      "name": "JAN",
      "value": 10
    },
    {
      "name": "FEB",
      "value": 8
    },
    {
      "name": "MAR",
      "value": 7
    },
    {
      "name": "APR",
      "value": 8
    },
    {
      "name": "MAY",
      "value": 7
    },
    {
      "name": "JUN",
      "value": 9
    },
    {
      "name": "JUL",
      "value": 8
    },
    {
      "name": "AUG",
      "value": 8
    },
    {
      "name": "SEP",
      "value": 7
    },
    {
      "name": "OCT",
      "value": 3
    },
    {
      "name": "NOV",
      "value": 4
    },
    {
      "name": "DEC",
      "value": 7
    },
  ];

  singleDuration = [
    {
      "name": "30",
      "value": 8
    },
    {
      "name": "90",
      "value": 3
    },
    {
      "name": "180",
      "value": 6
    },
    {
      "name": "365",
      "value": 5
    }
  ];

  singleValueRange = [
    {
      "name": "0 - 1000",
      "value": 8
    },
    {
      "name": "1000 - 5000",
      "value": 3
    },
    {
      "name": "5000 - 10000",
      "value": 6
    },
    {
      "name": "> 10000",
      "value": 5
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
