import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeReverse',
  standalone: true
})
export class PipeReversePipe implements PipeTransform {

  transform(value: number) {
    return value * 2;
  }

}
