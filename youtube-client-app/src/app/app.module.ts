import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchFieldComponent } from './search/search-field/search-field.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchItemComponent,
    SearchResultsComponent,
    SearchFieldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
