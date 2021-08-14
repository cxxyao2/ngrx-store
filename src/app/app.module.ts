import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { GenreComponent } from './components/genre/genre.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CourseComponent,
    AboutComponent,
    GenreComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([GenreEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
