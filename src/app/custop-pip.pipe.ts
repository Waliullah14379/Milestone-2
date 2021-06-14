import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custopPip'
})
export class CustopPipPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.substr(0,2)+'*****'+value.substr(-1,-2);
  }

}
