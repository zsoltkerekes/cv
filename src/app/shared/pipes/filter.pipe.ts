import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value, search = '') {
    if (search.length === 0) {
      return value;
    } else {
      const temp = value.filter(
        (row) => (row.name.toUpperCase().indexOf(search.toUpperCase()) !== -1) ? true : false
      );
      return temp;
    }
  }

}
