import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, pluck } from 'rxjs/operators';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import * as ItemActions from '../../redux/actions/items.actions';

@Injectable()
export class YoutubeItemsEffects {
  public loadCards$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType('[Youtube Page] Get Youtube Cards'),
      mergeMap((action: { query: string }) =>
        this.youtubeService.getSearchResult(action.query).pipe(
          pluck('items'),
          map((items) => ItemActions.youtubeItemsLoadedSuccess({ items })),
          catchError((error) => of(ItemActions.youtubeItemsLoadedError({ error }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private youtubeService: YoutubeService) {}
}