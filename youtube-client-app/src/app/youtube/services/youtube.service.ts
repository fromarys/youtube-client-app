import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ISearchResponse } from 'src/app/youtube/models/search-response.model';
import { environment } from 'src/environments/environment';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  public $searchQuery = new Subject<string>();

  constructor(private httpClient: HttpClient) { }

  getSearchResult(query: string): Observable<ISearchResponse> {
    return this.sendSearchRequest(query);
  }

  sendSearchRequest(query: string) {
    const params: Params = new HttpParams()
      .set('type', environment.SEARCH_TYPE)
      .set('part', environment.SEARCH_PART)
      .set('maxResults', environment.MAX_RESULTS)
      .set('q', query);
    return this.httpClient.get<ISearchResponse>(`${environment.API_URL}/${environment.SEARCH_URL}`, { params });
  }

  sendVideosRequest(id: string): Observable<ISearchResponse> {
    const params: Params = new HttpParams()
      .set('id', id)
      .set('part', environment.VIDEOS_PART);
    return this.httpClient.get<ISearchResponse>(`${environment.API_URL}/${environment.VIDEOS_URL}`, { params });
  }
}
