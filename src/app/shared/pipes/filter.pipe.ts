import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(value, search = "") {
    if (search.length === 0) {
      return value;
    } else {
      return value.filter(
        (row) =>
          (row.name &&
          row.name.toUpperCase().indexOf(search.toUpperCase()) !== -1
            ? true
            : false) ||
          (row.description &&
          row.description.toUpperCase().indexOf(search.toUpperCase()) !== -1
            ? true
            : false)
      );
    }
  }
}
