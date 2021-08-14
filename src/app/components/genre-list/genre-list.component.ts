import * as genreActions from '../../store/actions/genre.actions';
import { AppState } from '../../store/reducers/app.states';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Genre } from '../../models/genre';
import { GenreService } from './../../services/genre.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { getAllGenres } from '../../store/reducers/genre.reducer';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css'],
})
export class GenreListComponent implements OnInit {
  genres$: Observable<Genre[]>;

  genreToBeUpdated: Genre;

  isUpdateActivated = false;

  constructor(
    private genreService: GenreService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.genres$ = this.store.select(getAllGenres);
  }

  deleteGenre(genreId: string) {
    this.store.dispatch(new genreActions.DeleteGenreAction(genreId));
  }

  showUpdateForm(genre: Genre) {
    this.genreToBeUpdated = { ...genre };
    this.isUpdateActivated = true;
  }

  updateGenre(updateForm: any) {
    this.store.dispatch(
      new genreActions.UpdateGenreAction({
        _id: this.genreToBeUpdated._id,
        name: updateForm.value.name,
      })
    );
    // const update: Update<genre> = {
    //   id: this.genreToBeUpdated.id,
    //   changes: {
    //     ...this.genreToBeUpdated,
    //     ...updateForm.value,
    //   },
    // };

    // this.store.dispatch(genreActionTypes.updategenre({ update }));

    this.isUpdateActivated = false;
    this.genreToBeUpdated = null;
  }

  
}
