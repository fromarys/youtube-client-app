import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public sortingDateId: string = '';
  public sortingViewsId: string = '';
  constructor() {}

  ngOnInit(): void {
  }

  getSortingStatus(event: Sort) {
    console.log(event);
  }
}
