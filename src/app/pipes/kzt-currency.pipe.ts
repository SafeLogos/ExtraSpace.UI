import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kztCurrency'
})
export class KztCurrencyPipe implements PipeTransform {

  transform(value: unknown, arg1: any): unknown {
    if(!value)
      return '';
    let pipe: DecimalPipe = new DecimalPipe('en-US');
    let str = pipe.transform(value, '0.1-2')
    str = str.replace(/,/g, ' ');

    if(arg1 == 'int')
      str = str.substr(0, str.indexOf('.'))

    return str + '₸';
  }

}
