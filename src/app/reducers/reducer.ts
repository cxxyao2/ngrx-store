import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from './app.states';
import * as articleReducer from './article.reducer';
import { environment } from '../../environments/environment';

// TODO
export const reducers: ActionReducerMap<any, any> = {
  articleState: articleReducer.reducer,
};

// TODO
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
