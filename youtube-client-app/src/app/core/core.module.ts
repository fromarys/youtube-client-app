import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { SearchFieldComponent } from './components/search/search-field/search-field.component';
import { SearchFilterComponent } from './components/search/search-filter/search-filter.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainComponent } from './pages/main/main.component';
import { YoutubeInterceptor } from './interceptors/youtube.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchFieldComponent,
    SearchFilterComponent,
    NotFoundComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YoutubeInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule { }
