import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'youtube-client-app';

  public query: string = '';

  setQuery(query: Event) {
    // this.query = query;
    console.log(query);
  }
}
