import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<any>, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const filteredArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }
}

