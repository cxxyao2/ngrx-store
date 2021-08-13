import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as crousesActions from '../actions/course.actions';
import { JAVA_COURSES, ANGULAR_COURSES } from '../models/course';
import { CourseState } from './app.states';

export const initialState: CourseState = { courses: [] };

export function reducer(
  state = initialState,
  action: crousesActions.ALL
): CourseState {
  switch (action.type) {
    case crousesActions.JAVA_COURSRE: {
      return { courses: JAVA_COURSES };
    }
    case crousesActions.ANGULAR_COURSE: {
      return { courses: ANGULAR_COURSES };
    }
    case crousesActions.MY_COURSES: {
      return { courses: action.payload };
    }
    default: {
      return state;
    }
  }
}

export const getCourseState = createFeatureSelector('courseState');

export const getCourses = createSelector(
  getCourseState,
  (state: CourseState) => state.courses
);
