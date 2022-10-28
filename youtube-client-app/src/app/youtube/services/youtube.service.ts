import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, switchMap } from 'rxjs';
import { ISearchResponse } from 'src/app/youtube/models/search-response.model';
import { environment } from 'src/app/shared/enviromnents/environment';
import { Params } from '@angular/router';
import { IItem, Item } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  public $searchQuery = new Subject<string>();

  constructor(private httpClient: HttpClient) { }

  getSearchResult(query: string): Observable<ISearchResponse<Item>> {
    const params: Params = new HttpParams()
      .set('type', environment.SEARCH_TYPE)
      .set('part', environment.SEARCH_PART)
      .set('maxResults', environment.MAX_RESULTS)
      .set('q', query);
    return this.sendSearchRequest(params);
  }

  sendSearchRequest(params: Params) {
    return this.httpClient.get<ISearchResponse<IItem>>(`${environment.API_URL}/${environment.SEARCH_URL}`, { params })
      .pipe(
        switchMap((res) => {
          const id = res.items.map((item) => item.id.videoId);
          return this.sendVideosRequest(id.join(','));
        }),
      );
  }

  sendVideosRequest(id: string): Observable<ISearchResponse<Item>> {
    const params: Params = new HttpParams()
      .set('id', id)
      .set('part', environment.VIDEOS_PART);
    return this.httpClient.get<ISearchResponse<Item>>(`${environment.API_URL}/${environment.VIDEOS_URL}`, { params });
  }
}
