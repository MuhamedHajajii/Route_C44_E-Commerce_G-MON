import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceData',
})
export class SliceDataPipe implements PipeTransform {
  transform(value: string, num: number = 2): string {
    return value.split(' ').slice(0, num).join(' ');
  }
}
