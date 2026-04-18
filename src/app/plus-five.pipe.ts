import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plusFive',
  standalone: true
})
export class PlusFivePipe implements PipeTransform {
  transform(value: number): number {
    return value + 5;
  }
}