import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ISearchResponse } from 'src/app/youtube/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private url: string = '/assets/response/response.json';
  public $response = new Subject<ISearchResponse>();
  public $searchQuery = new Subject<string>();

  constructor(private httpClient: HttpClient) { }

  getSearchResult(): Observable<ISearchResponse> {
    return this.httpClient.get<ISearchResponse>(this.url);
  }

  sendSearchQuery(query: string) {
    this.$searchQuery.next(query);
  }
}
