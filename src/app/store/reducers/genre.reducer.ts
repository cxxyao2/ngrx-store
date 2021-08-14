import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as genresActions from '../actions/genre.actions';
import { GenreState } from './app.states';

export const initialState: GenreState = { genres: [], genreLoaded: false };

export function reducer(
  state = initialState,
  action: genresActions.ALL
): GenreState {
  switch (action.type) {
    case genresActions.CREATE_GENRE: {
      const newArray = [...state.genres];
      newArray.push({ id: 'TODO', name: action.payload });
      return { ...state, genres: newArray };
    }
    case genresActions.DELETE_GENRE: {
      const newArray = state.genres.filter(
        (genre) => genre.id !== action.payload.id
      );
      return { ...state, genres: newArray };
    }
    case genresActions.UPDATE_GENRE: {
      const newArray = state.genres.map((genre) =>
        genre.id === action.payload.id
          ? { id: genre.id, name: action.payload.name }
          : genre
      );
      return { ...state, genres: newArray };
    }
    case genresActions.GENRE_LOADED: {
      const newGenres = [...state.genres, ...action.payload];
      return { ...state, genres: newGenres };
    }
    default: {
      return state;
    }
  }
}

export const getCGenreState = createFeatureSelector('genreState');

export const getGenre = createSelector(
  getCGenreState,
  (state: GenreState) => state.genres
);

export const areGenresLoaded = createSelector(
  getCGenreState,
  (state: GenreState) => state.genreLoaded
);
