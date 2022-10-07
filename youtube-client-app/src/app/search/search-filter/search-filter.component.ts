import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent implements OnInit {
  public sortingDateId: string = '';
  public sortingViewsId: string = '';
  constructor() {}

  ngOnInit(): void {
  }

  getSortingStatus(event: Sort) {
    console.log(event);
  }
}
