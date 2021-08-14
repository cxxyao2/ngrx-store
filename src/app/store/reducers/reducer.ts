import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from './app.states';
import * as articleReducer from './article.reducer';
import * as courseReducer from './course.reducer';
import * as genreReducer from './genre.reducer';
import { environment } from '../../../environments/environment';

export const reducers: ActionReducerMap<any, any> = {
  articleState: articleReducer.reducer,
  courseState: courseReducer.reducer,
  genreState: genreReducer.reducer,
};

export function logger(
  reducer: ActionReducer<any, any>
): ActionReducer<any, any> {
  return function (state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer[] = !environment.production
  ? [logger]
  : [];
