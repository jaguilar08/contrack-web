import { Component, Input, OnInit } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'vertical-charts',
  templateUrl: './vertical-charts.component.html',
  styleUrls: ['./vertical-charts.component.css']
})
export class VerticalChartsComponent implements OnInit {
  @Input() single!: Array<Object>;
  @Input() title!: string;
  @Input() colorScheme!: Color;
  showXAxis: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
