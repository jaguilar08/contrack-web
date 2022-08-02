import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'toDate'
})
export class ToDatePipe implements PipeTransform {

  transform(value: string | moment.Moment, ...args: string[]): unknown {
    let iFormat = 'YYYY-MM-DD HH:mm:ss';
    let oFormat = 'MMM DD, YYYY';
    switch (args.length) {
      case 1:
        oFormat = args[0];
        break;
      case 2:
        iFormat = args[0];
        oFormat = args[1];
        break;
    }
    if (typeof value === 'string') {
      return moment(value, iFormat).format(oFormat);
    } else if (value instanceof moment) {
      return (value as moment.Moment).format(oFormat);
    }
    return 'Invalid Date';
  }
}
