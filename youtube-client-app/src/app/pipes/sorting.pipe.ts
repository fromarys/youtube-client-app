import { Pipe, PipeTransform } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Item } from '../search/search-item/models';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {
  private date: string = 'date-sorting';
  private asc: string = 'asc';

  transform(items: Item[], status: Sort | undefined): Item[] {
    let sortedItems = items;
    if (status?.direction === '' || !status) return items;
    const sort = status?.direction === this.asc ? this.sortAsc : this.sortDesc;
    if (status?.active === this.date) {
      sortedItems = sort(items, this.getDate);
    } else {
      sortedItems = sort(items, this.getViews);
    }
    return sortedItems;
  }

  getDate(item: Item): number {
    return new Date(item.snippet.publishedAt).getTime();
  }

  getViews(item: Item): number {
    return Number(item.statistics.viewCount);
  }

  sortAsc(items: Item[], callback: (item: Item) => number): Item[] {
    return items.sort((a, b) => callback(a) - callback(b));
  }

  sortDesc(items: Item[], callback: (item: Item) => number): Item[] {
    return items.sort((a, b) => callback(b) - callback(a));
  }
}
