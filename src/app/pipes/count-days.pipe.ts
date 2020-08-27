import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countDays'
})
export class CountDaysPipe implements PipeTransform {

  transform(date: Date): number {
    const countTime =  new Date().getTime() - new Date(date).getTime();
    const countDays = Math.floor(countTime / (1000 * 3600 * 24));
    return countDays;
  }

}
