import { Item } from "../youtube/models/search-item.model";
import { ICustomItem } from "../youtube/models/custom-item.model";

export interface IItemState {
  youtubeItems: IYoutubeList;
  customItems: ICustomList;
}

export interface IYoutubeList {
  itemsList: Item[];
  error: Error | null;
  search: string;
}

export interface ICustomList {
  itemsList: ICustomItem[];
  error: Error | null;
}
