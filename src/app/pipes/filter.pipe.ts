import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, elt: string, att: string): any {
    // @ts-ignore
    if (value.length === 0 || elt.length === 0){
      return value;
    }
    const result = [];
    for (const item of value){
      if (item[att].includes(elt)){
        // @ts-ignore
        result.push(item);
      }
    }
    return result;
  }

}
