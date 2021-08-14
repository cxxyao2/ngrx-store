import { Store } from '@ngrx/store';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as courseReducer from '../../store/reducers/course.reducer';
import * as fromActions from '../../store/actions/course.actions';
import { Course, FAVORITE_COURSES } from '../../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses: Observable<Course[]>;

  constructor(private store: Store) {
    this.courses = store.select(courseReducer.getCourses);
  }

  showJavaCourses() {
    this.store.dispatch(new fromActions.JavaCoursesAction());
  }

  showAngularCourses() {
    this.store.dispatch(new fromActions.AngularCoursesAction());
  }

  showFavoriteCourses() {
    this.store.dispatch(
      new fromActions.FavoriteCoursesAction(FAVORITE_COURSES)
    );
  }
  ngOnInit(): void {}
}
