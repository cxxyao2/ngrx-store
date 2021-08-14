import { Genre } from '../../models/genre';
import { CreateGenreAction } from '../../store/actions/genre.actions';
import { AppState } from '../../store/reducers/app.states';

import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css'],
})
export class CreateGenreComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onSubmit(submittedForm) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }

    const genreName = submittedForm.value.name;
    this.store.dispatch(new CreateGenreAction(genreName));
  }
}
