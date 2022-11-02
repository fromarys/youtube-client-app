import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/youtube/models/search-item.model';
import { ICustomItem } from 'src/app/youtube/models/custom-item.model';

export const addCustomItem = createAction(
  '[Youtube Page] Add Custom Item',
  props<{ item: ICustomItem }>(),
);

export const addCustomItemError = createAction(
  '[Youtube Page] Add Custom Card Error',
  props<{ error: Error }>(),
);

export const getYoutubeItems = createAction(
  '[Youtube Page] Get Youtube Cards',
  props<{ query: string }>(),
);

export const youtubeItemsLoadedSuccess = createAction(
  '[Youtube API] Youtube Cards Loaded Success',
  props<{ items: Item[] }>(),
);

export const youtubeItemsLoadedError = createAction(
  '[Youtube API] Youtube Cards Loaded Error',
  props<{ error: Error }>(),
);

export const setYoutubeSearch = createAction(
  '[Youtube Page] Set Youtube Search Value',
  props<{ search: string }>(),
);
