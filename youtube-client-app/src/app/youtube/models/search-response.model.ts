export interface IPageInfo {
  totalResults: number,
  resultsPerPage: number
}

export interface ISearchResponse<T> {
  kind: string,
  etag: string,
  pageInfo: IPageInfo,
  items: Array<T>
}
