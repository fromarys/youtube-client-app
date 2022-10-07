import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchFieldComponent } from './search/search-field/search-field.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchFilterComponent } from './search/search-filter/search-filter.component';
import { SortingPipe } from './pipes/sorting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchItemComponent,
    SearchResultsComponent,
    SearchFieldComponent,
    SearchFilterComponent,
    SortingPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
