import { NgModule } from '@angular/core';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchComponent } from './pages/search/search.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SortingPipe } from './pipes/sorting.pipe';
import { FilteringPipe } from './pipes/filtering.pipe';
import { SharedModule } from '../shared/shared.module';
import { BorderColorDirective } from './directives/border-color.directive';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchComponent,
    SortingPipe,
    FilteringPipe,
    BorderColorDirective,
    DetailsComponent,
  ],
  imports: [
    SharedModule,
    YoutubeRoutingModule,
  ],
})
export class YoutubeModule { }
