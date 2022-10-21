import { Component, OnInit, OnDestroy } from '@angular/core';
import { pluck, Subject, switchMap } from 'rxjs';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { SortingService } from 'src/app/core/services/search/sorting.service';
import { FilteringService } from 'src/app/core/services/search/filtering.service';
import { ActivatedRoute } from '@angular/router';
import { SearchParam } from 'src/app/shared/enums/enums';
import { ISearchResponse } from '../../models/search-response.model';
import { Item } from '../../models/search-item.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  public response: ISearchResponse<Item> | undefined;
  public $sortingStatus = this.sortingService.$sorting;
  public $filter = this.filteringService.$filtering;
  public $subject = new Subject();
  constructor(
    private youtubeService: YoutubeService,
    private sortingService: SortingService,
    private filteringService: FilteringService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      pluck(SearchParam.query),
      switchMap((query) => this.youtubeService.getSearchResult(query)),
    )
      .subscribe((response) => {
        this.response = response;
      });
  }

  ngOnDestroy(): void {
  }
}
