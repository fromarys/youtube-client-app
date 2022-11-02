import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, of, pluck, Subject, switchMap } from 'rxjs';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { SortingService } from 'src/app/core/services/search/sorting.service';
import { FilteringService } from 'src/app/core/services/search/filtering.service';
import { ActivatedRoute } from '@angular/router';
import { SearchParam } from 'src/app/shared/enums/enums';
import { ISearchResponse } from '../../models/search-response.model';
import { Store } from '@ngrx/store';
import * as ItemActions from '../../../redux/actions/items.actions';
import * as ItemSelectors from '../../../redux/selectors/items.selectors';
import { Item } from '../../models/search-item.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  public response: ISearchResponse | undefined;
  public items: Item[] | undefined;
  public customItems: Item[] | undefined;
  public $sortingStatus = this.sortingService.$sorting;
  public $filter = this.filteringService.$filtering;
  public youtubeError$ = this.store.select(ItemSelectors.selectYoutubeError);
  public customResults$ = this.store.select(ItemSelectors.selectCustomItems);
  private youtubeResults$ = this.store.select(ItemSelectors.selectYoutubeItems);
  constructor(
    private youtubeService: YoutubeService,
    private sortingService: SortingService,
    private filteringService: FilteringService,
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      pluck(SearchParam.query),
      map((search) => {
          if (search) {
            this.store.dispatch(ItemActions.setYoutubeSearch({ search }))
            this.store.dispatch(ItemActions.getYoutubeItems({ query: search }))
          }
        }
      ),
      switchMap(() => 
        this.youtubeResults$.pipe(
          map((result) => {
            if (result.length !== 0) {
              this.items = result;
            }
          })
        )
      )
    )
      .subscribe({
        error: () => {
          throw new Error('Invalid request');
        },
      });
  }

  ngOnDestroy(): void {
  }
}
