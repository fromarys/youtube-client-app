import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/shared/enviromnents/environment';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request: HttpRequest<string> = req;
    if (req.url.includes(environment.API_URL)) {
      request = req.clone({
        setParams: {
          key: environment.API_KEY,
        },
      });
    }
    return next.handle(request);
  }
}
