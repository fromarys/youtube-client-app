import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { SortingService } from 'src/app/services/sorting.service';
import { Sort } from '@angular/material/sort';
import { ISearchResponse } from './models';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  // TODO remove initializing after layout is done
  public $response: Observable<ISearchResponse> | undefined = this.searchService.getSearchResult();
  // public $sortingStatus: Sort | undefined;
  constructor(private searchService: SearchService, private sortingService: SortingService) {
  }

  ngOnInit(): void {
    this.searchService.$searchQuery.subscribe(() => {
      this.$response = this.searchService.getSearchResult();
    });
    // this.sortingService.$sorting.subscribe((status) => {
    //   this.$sortingStatus = status;
    // });
  }

  ngOnDestroy(): void {
    this.searchService.$searchQuery.unsubscribe();
    this.sortingService.$sorting.unsubscribe();
  }
}
