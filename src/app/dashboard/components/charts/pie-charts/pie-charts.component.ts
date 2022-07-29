import { Component, Input, OnInit } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent implements OnInit {
  @Input() colorScheme!: Color;
  @Input() single!: Array<Object>;
  @Input() title!: string;
  @Input() designedTotal!: number;
  constructor() { 
    Object.assign(this, { single: this.single });
  }

  ngOnInit(): void {
  }

}
