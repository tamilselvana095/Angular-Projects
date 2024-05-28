import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'root'
})
export class RootPipe implements PipeTransform {

  transform(value: number, power = 1): number {
    return Math.pow(value, power);
}

}
