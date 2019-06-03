import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataShower'
})
export class DataShowerPipe implements PipeTransform {
  transform(value: string, args: any): any {
    const presentDate = new Date();
    let stringedDate = presentDate.toLocaleString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    stringedDate = stringedDate.substring(0, 10);
    if (args.date.substring(0, 10) === stringedDate) {
      if (args.index === 0) {
        return value;
      } else {
        return value.substring(11, value.length);
      }
    } else {
      return value;
    }
  }

}
