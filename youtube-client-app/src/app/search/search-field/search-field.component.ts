import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  @Output() searchClick = new EventEmitter<string>();

  constructor(private readonly searchService: SearchService) { }

  ngOnInit(): void {
  }

  onSearchButtonClick(input: HTMLInputElement) {
    this.searchService.sendSearchQuery(input.value);
  }
}
