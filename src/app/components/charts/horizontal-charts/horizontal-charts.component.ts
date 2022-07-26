import { Component, Input, OnInit } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'horizontal-charts',
  templateUrl: './horizontal-charts.component.html',
  styleUrls: ['./horizontal-charts.component.css']
})
export class HorizontalChartsComponent implements OnInit {
  @Input() single!: Array<Object>;
  @Input() title!: string;
  @Input() colorScheme!: Color;
  
  showYAxis: boolean = true;

  constructor() {
    Object.assign(this, { single: this.single });
   }

  ngOnInit(): void {
  }

}
