import { NgModule } from '@angular/core';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchComponent } from './pages/search/search.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SortingPipe } from './pipes/sorting.pipe';
import { FilteringPipe } from './pipes/filtering.pipe';
import { SharedModule } from '../shared/shared.module';
import { BorderColorDirective } from './directives/border-color.directive';
import { DetailsComponent } from './pages/details/details.component';
import { LinkifyPipe } from './pipes/linkify.pipe';
import { AdminComponent } from './pages/admin/admin.component';
import { CustomItemComponent } from './components/search/custom-item/custom-item.component';

@NgModule({
  declarations: [
    SearchItemComponent,
    CustomItemComponent,
    SearchComponent,
    SortingPipe,
    FilteringPipe,
    BorderColorDirective,
    DetailsComponent,
    LinkifyPipe,
    AdminComponent,
  ],
  imports: [
    SharedModule,
    YoutubeRoutingModule,
  ],
})
export class YoutubeModule { }
