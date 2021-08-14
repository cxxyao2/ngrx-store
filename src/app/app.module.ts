import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { reducers, metaReducers } from './store/reducers/reducer';
import { CourseComponent } from './components/course/course.component';
import { AboutComponent } from './components/about/about.component';
import { EffectsModule } from '@ngrx/effects';
import { GenreEffects } from './store/effects/genre.effects';
import { GenreListComponent } from './components/genre-list/genre-list.component';
import { CreateGenreComponent } from './components/create-genre/create-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CourseComponent,
    AboutComponent,
    GenreListComponent,
    CreateGenreComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([GenreEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
