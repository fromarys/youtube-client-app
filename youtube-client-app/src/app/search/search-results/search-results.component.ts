import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { ISearchResponse } from './models';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  // TODO remove initializing after layout is done
  public $response: Observable<ISearchResponse> | undefined = this.searchService.getSearchResult();

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.searchService.$searchQuery.subscribe(() => {
      this.$response = this.searchService.getSearchResult();
    });
  }

  ngOnDestroy(): void {
    this.searchService.$searchQuery.unsubscribe();
  }
}
