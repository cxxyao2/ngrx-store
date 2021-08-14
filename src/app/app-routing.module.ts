import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ArticleComponent } from './components/article/article.component';
import { CourseComponent } from './components/course/course.component';
import { GenreListComponent } from './components/genre-list/genre-list.component';
import { CreateGenreComponent } from './components/create-genre/create-genre.component';
import { GenreResolver } from './genre.resolver';

// GenreListComponent uses a resolver to fetch data
const routes: Routes = [
  {
    path: 'course',
    component: CourseComponent,
  },
  {
    path: 'article',
    component: ArticleComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path:'genre-list',
    component: GenreListComponent,
    resolve:{
      genres:GenreResolver
    }
  },
  {
    path:'create-genre',
    component:CreateGenreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
