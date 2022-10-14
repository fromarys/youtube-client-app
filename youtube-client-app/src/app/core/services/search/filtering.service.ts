import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilteringService {
  public $filtering = new Subject<string>();
  public filter: string = '';
  constructor() { }

  setFilter(filter: string): void {
    this.$filtering.next(filter);
  }
}
