import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';
import { SortingService } from 'src/app/core/services/sorting.service';
import { FilteringService } from 'src/app/core/services/filtering.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  public $response = this.searchService.getSearchResult();
  public $sortingStatus = this.sortingService.$sorting;
  public $filter = this.filteringService.$filtering;
  public $subject = new Subject();
  constructor(
    private searchService: SearchService,
    private sortingService: SortingService,
    private filteringService: FilteringService,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
