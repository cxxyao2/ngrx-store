import { Article } from '../models/article';
import { Course } from '../models/course';

export interface AppState {
  articleState: ArticleState;
  courseState: CourseState;
}

export interface ArticleState {
  articles: Article[];
}

export interface CourseState {
  courses: Course[];
}
