import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ArticleComponent } from './components/article/article.component';
import { CourseComponent } from './components/course/course.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
