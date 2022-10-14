import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  @Output() searchClick = new EventEmitter<string>();

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  onSearchButtonClick() {
    this.router.navigate(['/search']);
  }
}
