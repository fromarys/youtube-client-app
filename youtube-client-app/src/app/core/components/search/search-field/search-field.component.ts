import {
  Component, OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  catchError,
  debounceTime, distinctUntilChanged, filter, of, Subject, switchMap,
} from 'rxjs';
import { DEBOUNCE_DELAY, MIN_SEARCH_LENGTH } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  public searchValue: string = '';
  public $searchQuery = new Subject<string>();

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.$searchQuery.pipe(
      filter((query) => query.length >= MIN_SEARCH_LENGTH),
      debounceTime(DEBOUNCE_DELAY),
      distinctUntilChanged(),
      catchError((error) => of(error)),
    ).subscribe((query) => {
      this.router.navigate(['/search', query]);
    });
  }
}
