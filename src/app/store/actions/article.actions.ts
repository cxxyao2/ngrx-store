import { Action } from '@ngrx/store';
import { Article } from '../../models/article';

export const JAVA = 'Java';
export const ANGULAR = 'ANGULAR';
export const MY_ARTICLES = 'Favorite_Articles';

export class JavaArticlesAction implements Action {
  readonly type = JAVA;
}

export class AngularArticlesAction implements Action {
  readonly type = ANGULAR;
}

export class FavoriteArticlesAction implements Action {
  readonly type = MY_ARTICLES;
  constructor(public payload: Article[]) {}
}

export type ALL =
  | JavaArticlesAction
  | AngularArticlesAction
  | FavoriteArticlesAction;
