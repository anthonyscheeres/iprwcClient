import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'decode64'
})
export class Decode64Pipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let a = '';
    if (value) {
      value  = value.split(',')[1];
      a = atob(value);
    }
    return a;
  }
}
