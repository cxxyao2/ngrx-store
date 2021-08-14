import { Article } from '../../models/article';
import { Course } from '../../models/course';
import { Genre } from '../../models/genre';

export interface AppState {
  articleState: ArticleState;
  courseState: CourseState;
  genreState: GenreState;
}

export interface ArticleState {
  articles: Article[];
}

export interface CourseState {
  courses: Course[];
}

export interface GenreState {
  genres: Genre[];
  genreLoaded: boolean;
}
