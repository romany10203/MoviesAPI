import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { HeaderComponent } from './header/header.component';
import { StarComponent } from './star/star.component';
import { TvComponent } from './tv/tv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingleTvComponent } from './single-tv/single-tv.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SingleMovieComponent,
    HeaderComponent,
    StarComponent,
    TvComponent,
    PageNotFoundComponent,
    SingleTvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
