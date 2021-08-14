import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, concatMap, catchError, tap } from 'rxjs/operators';
import { GenreService } from '../../services/genre.service';
import * as genreActions from '../actions/genre.actions';

@Injectable()
export class GenreEffects {
  loadGenre$ = createEffect(() =>
    this.actions$.pipe(
      ofType(genreActions.LOAD_GENRE),
      concatMap(() =>
        this.genresService.getAllGenres().pipe(
          map(
            (genres) => new genreActions.GenreLoadedAction(genres),
            catchError(() => EMPTY)
          )
        )
      )
    )
  );

  // ROUTER genres
  createGenre$ = createEffect(() =>
    this.actions$.pipe(
      ofType(genreActions.CREATE_GENRE),
      concatMap((action: any) =>
        this.genresService.createGenre(action.payload).pipe(
          map((genre) => new genreActions.GenreAddededAction(genre)),
          tap(() => this.router.navigateByUrl('/genre-list'))
        )
      )
    )
  );

  deleteGenre$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(genreActions.DELETE_GENRE),
        concatMap((action: any) =>
          this.genresService.deleteGenre(action.payload)
        )
      ),
    { dispatch: false }
  );

  updateGenre$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(genreActions.UPDATE_GENRE),
        concatMap((action: any) =>
          this.genresService.updateGenre(action.payload)
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private genresService: GenreService,
    private router: Router
  ) {}
}

//  updateGenre$ ,deleteGenre, these effects do not map the incoming action to a new action type, which is why {dispatch: false} config is used.
// however,  loadGenre& ,,it maps the response to a new action type called genreLoaded.
