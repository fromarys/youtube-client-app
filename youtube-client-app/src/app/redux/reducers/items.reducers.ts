import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import * as ItemActions from '../actions/items.actions';
import { IItemState, ICustomList, IYoutubeList } from '../state.models';

const initialCustomState: ICustomList = {
  itemsList: [],
  error: null,
};

const initialYoutubeState: IYoutubeList = {
  itemsList: [],
  error: null,
  search: '',
};

const customReducer = createReducer(
  initialCustomState,
  on(ItemActions.addCustomItem, (state, { item }) => ({
    ...state,
    itemsList: [...state.itemsList, item],
  })),
  on(ItemActions.addCustomItemError, (state, { error }) => ({
    ...state,
    error,
  })),
);

const youtubeReducer = createReducer(
  initialYoutubeState,
  on(ItemActions.youtubeItemsLoadedSuccess, (state, { items }) => ({
    ...state,
    itemsList: items,
  })),
  on(ItemActions.youtubeItemsLoadedError, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ItemActions.setYoutubeSearch, (state, { search }) => ({
    ...state,
    search,
  })),
);

export const reducers: ActionReducerMap<IItemState> = {
  youtubeItems: youtubeReducer,
  customItems: customReducer,
};
