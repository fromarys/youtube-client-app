import { Component, OnInit, Input } from '@angular/core';
import { IId, IItem, Item } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() public item: Item | undefined;
  constructor() {}

  ngOnInit(): void {
  }
  
  mockDislikes(likes: string | undefined): number {
    return Math.floor((Number(likes) * 5) / 100);
  }
}
