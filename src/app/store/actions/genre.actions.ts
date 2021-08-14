// 5 action:
// genresLoaded : dispatched by effect in order to inform the store that the genres were loaded successfully.
// createGenre,deleteGenre,updateGenre,loadGenre(:get all genres from database): dispatched by component

import { Action } from '@ngrx/store';
import { Genre } from '../../models/genre';

export const LOAD_GENRE = 'Load Genre';
export const CREATE_GENRE = 'Create Genre';
export const DELETE_GENRE = 'Delete Genre';
export const UPDATE_GENRE = 'Update Genre';
export const GENRE_LOADED = 'Genre is loaded';

export class LoadGenreAction implements Action {
  readonly type = LOAD_GENRE;
}

export class CreateGenreAction implements Action {
  readonly type = CREATE_GENRE;
  constructor(public payload: string) {}
}

export class DeleteGenreAction implements Action {
  readonly type = DELETE_GENRE;
  constructor(public payload: Genre) {}
}

export class UpdateGenreAction implements Action {
  readonly type = UPDATE_GENRE;
  constructor(public payload: Genre) {}
}
export class GenreLoadedAction implements Action {
  readonly type = GENRE_LOADED;
  constructor(public payload: Genre[]) {}
}

export type ALL =
  | LoadGenreAction
  | CreateGenreAction
  | DeleteGenreAction
  | UpdateGenreAction
  | GenreLoadedAction;
