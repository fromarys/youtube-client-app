import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICustomList, IYoutubeList } from '../state.models';

const CustomItems = createFeatureSelector<ICustomList>('customItems');
const YoutubeItems = createFeatureSelector<IYoutubeList>('youtubeItems');

export const selectCustomItems = createSelector(CustomItems, ({ itemsList }) => itemsList);
export const selectYoutubeItems = createSelector(YoutubeItems, ({ itemsList }) => itemsList);
export const selectYoutubeError = createSelector(YoutubeItems, ({ error }) => error);
export const selectYoutubeSearch = createSelector(
  YoutubeItems,
  ({ search }) => search,
);
