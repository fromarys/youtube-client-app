import { Component, OnInit, Input } from '@angular/core';
import { Item } from './models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input()
  public item: Item | undefined;
  public defaultUrl: string | undefined;
  public mediumUrl: string | undefined;
  public highUrl: string | undefined;
  public standardUrl: string | undefined;
  public maxresUrl: string | undefined;
  constructor() {
  }

  ngOnInit(): void {
    this.mediumUrl = this.item?.snippet.thumbnails.medium.url;
  }
}
