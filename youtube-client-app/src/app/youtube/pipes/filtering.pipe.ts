import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/search-item.model';

@Pipe({
  name: 'filtering',
})
export class FilteringPipe implements PipeTransform {
  transform(items: Item[], filter: string | null): Item[] {
    if (!filter) return items;
    return items.filter((item) => (item.snippet.title.toLowerCase())
      .includes(filter.toLowerCase()));
  }
}
