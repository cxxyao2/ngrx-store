import { areGenresLoaded } from './store/reducers/genre.reducer';
import { LoadGenreAction, GenreLoadedAction } from './store/actions/genre.actions';
import { AppState } from './store/reducers/app.states';
import { Genre } from './models/genre';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { filter, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GenreResolver implements Resolve<boolean> {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areGenresLoaded),
      tap((genresLoaded) => {
        if (!genresLoaded) {
          this.store.dispatch(new LoadGenreAction());
        }
      }),
      filter((genresLoaded) => genresLoaded),
      first()
    );
  }
}
