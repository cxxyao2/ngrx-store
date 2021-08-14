import { Action } from '@ngrx/store';
import { Course } from '../../models/course';

export const JAVA_COURSRE = 'Java Course';
export const ANGULAR_COURSE = 'ANGULAR Course';
export const MY_COURSES = 'Favorite_Course';

export class JavaCoursesAction implements Action {
  readonly type = JAVA_COURSRE;
}

export class AngularCoursesAction implements Action {
  readonly type = ANGULAR_COURSE;
}

export class FavoriteCoursesAction implements Action {
  readonly type = MY_COURSES;
  constructor(public payload: Course[]) {}
}

export type ALL =
  | JavaCoursesAction
  | AngularCoursesAction
  | FavoriteCoursesAction;
