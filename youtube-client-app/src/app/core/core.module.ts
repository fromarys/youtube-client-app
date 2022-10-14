import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchFieldComponent } from './components/search/search-field/search-field.component';
import { SearchFilterComponent } from './components/search/search-filter/search-filter.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchFieldComponent,
    SearchFilterComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
