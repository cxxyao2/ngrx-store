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
      newArray.push({ _id: 'undefined', name: action.payload });
      return { genreLoaded: state.genreLoaded, genres: newArray };
    }
    case genresActions.DELETE_GENRE: {
      const newArray = state.genres.filter(
        (genre) => genre._id !== action.payload
      );
      return { ...state, genres: newArray };
    }
    case genresActions.UPDATE_GENRE: {
      const newArray = state.genres.map((genre) =>
        genre._id === action.payload._id
          ? { _id: genre._id, name: action.payload.name }
          : genre
      );
      return { genreLoaded: state.genreLoaded, genres: newArray };
    }
    case genresActions.GENRE_LOADED: {
      const newGenres = [...state.genres, ...action.payload];
      return { genreLoaded: true, genres: newGenres };
    }
    case genresActions.GENRE_ADDEDED: {
      const newGenres = [...state.genres, action.payload];

      const rightGenre = newGenres.filter((genre) => genre._id !== 'undefined');
      return { genreLoaded: true, genres: rightGenre };
    }
    default: {
      return state;
    }
  }
}

export const getCGenreState = createFeatureSelector('genreState');

export const getAllGenres = createSelector(
  getCGenreState,
  (state: GenreState) => state.genres
);

export const areGenresLoaded = createSelector(
  getCGenreState,
  (state: GenreState) => state.genreLoaded
);
