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

  // TODO ROUTER genres
  createGenre$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(genreActions.CREATE_GENRE),
        concatMap((action: any) =>
          this.genresService.createGenre(action.payload)
        ),
        tap(() => this.router.navigateByUrl('/genres'))
      ),
    { dispatch: false }
  );

  deleteGenre$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(genreActions.DELETE_GENRE),
        concatMap((action: any) =>
          this.genresService.deleteGenre(action.payload.id)
        )
      ),
    { dispatch: false }
  );

  updateGenre$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(genreActions.UPDATE_GENRE),
        concatMap((action:any) =>
          this.genresService.updateGenre(
            action.payload.id,
            action.payload.name
          )
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
