import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { FilteringService } from 'src/app/core/services/search/filtering.service';
import { SortingService } from 'src/app/core/services/search/sorting.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent implements OnInit {
  public filter: string = '';
  constructor(private sortingService: SortingService, public filteringService: FilteringService) {}

  ngOnInit(): void {
  }

  getSortingStatus(status: Sort) {
    this.sortingService.changeSortingStatus(status);
  }

  filterItems() {
    this.filteringService.setFilter(this.filter);
  }
}
