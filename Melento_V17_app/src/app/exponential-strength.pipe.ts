import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, exponent=0): number {
    return Math.pow(value,exponent);
  }

  // transform(value:string): string{
    

  // }

}
