import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(input: any, symbol: string): any {
    let commas, decimals, wholeNumbers, output;
    input = input.toString();
			decimals = input.indexOf('.') === -1 ? '.00' : input.replace(/^(-?)\d+(?=\.)/, '');
			wholeNumbers = input.replace(/(\.\d+)$/, '');
			wholeNumbers = wholeNumbers.replace(/^0+/, '');
			if(wholeNumbers.length === 0) {
				wholeNumbers = '0';
			}
			commas = wholeNumbers.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
			if(decimals && decimals.length === 2)
				decimals = decimals+'0';
			if(decimals.split(".")[1].length>2){
				decimals=decimals.substring(0,3);
			}
      output = "" + commas + decimals;
      return symbol + output;
			
  }

}
