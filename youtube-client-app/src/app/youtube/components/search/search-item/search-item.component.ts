import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() public item: Item | undefined;
  constructor() {
  }

  ngOnInit(): void {
  }
}
