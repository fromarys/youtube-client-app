import { NgModule } from '@angular/core';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SortingPipe } from './pipes/sorting.pipe';
import { FilteringPipe } from './pipes/filtering.pipe';
import { SharedModule } from '../shared/shared.module';
import { BorderColorDirective } from './directives/border-color.directive';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    SortingPipe,
    FilteringPipe,
    BorderColorDirective,
  ],
  imports: [
    SharedModule,
    YoutubeRoutingModule,
  ],
})
export class YoutubeModule { }
