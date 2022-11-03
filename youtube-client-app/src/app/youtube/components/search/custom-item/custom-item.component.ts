import { Component, OnInit, Input } from '@angular/core';
import { ICustomItem } from 'src/app/youtube/models/custom-item.model';
import { Item } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-custom-item',
  templateUrl: './custom-item.component.html',
  styleUrls: ['./custom-item.component.scss'],
})
export class CustomItemComponent implements OnInit {
  @Input() public item: ICustomItem | undefined;
  constructor() {}

  ngOnInit(): void {
    console.log(this.item);
  }
}
