import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kztCurrency'
})
export class KztCurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: any): unknown {
    if(!value)
      return '';
    let pipe: DecimalPipe = new DecimalPipe('en-US');
    let str = pipe.transform(value, '0.1-2')
    str = str.replace(/,/g, ' ');

    if(args){
      for(let i: number = 0; i < args.length; i++)
      {
        console.log('s')
        if(args[i] == 'int'){
          str = str.substr(0, str.indexOf('.'))
        }

        else if(args[i] == 'kzt')
          str += '₸'
      };
    }

    return str;
  }

}
