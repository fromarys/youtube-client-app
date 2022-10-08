import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../search/search-item/models';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(items: Item[], filter: string | undefined): Item[] {
    if (!filter) return items;
    return items.filter((item) => {
      return (item.snippet.title.toLowerCase()).includes(filter.toLowerCase());
    });
  }
}
