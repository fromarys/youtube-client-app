import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { SortingService } from 'src/app/services/sorting.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent implements OnInit {
  public sortingDateId: string = '';
  public sortingViewsId: string = '';
  constructor(private sortingService: SortingService) {}

  ngOnInit(): void {
  }

  getSortingStatus(status: Sort) {
    this.sortingService.changeSortingStatus(status);
  }
}
