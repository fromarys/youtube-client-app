import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  public $sorting = new Subject<Sort>();

  constructor() { }

  changeSortingStatus(status: Sort) {
    this.$sorting.next(status);
  }
}
