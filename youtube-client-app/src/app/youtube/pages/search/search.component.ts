import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { SortingService } from 'src/app/core/services/search/sorting.service';
import { FilteringService } from 'src/app/core/services/search/filtering.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  public $response = this.youtubeService.getSearchResult();
  public $sortingStatus = this.sortingService.$sorting;
  public $filter = this.filteringService.$filtering;
  public $subject = new Subject();
  constructor(
    private youtubeService: YoutubeService,
    private sortingService: SortingService,
    private filteringService: FilteringService,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
