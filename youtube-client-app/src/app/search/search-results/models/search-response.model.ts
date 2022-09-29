import { Item } from '../../search-item/models';

export interface IPageInfo {
  totalResults: number,
  resultsPerPage: number
}

export interface ISearchResponse {
  kind: string,
  etag: string,
  pageInfo: IPageInfo,
  items: Array<Item>
}
