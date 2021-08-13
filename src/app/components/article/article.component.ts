import { Store } from '@ngrx/store';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as articleReducer from '../../reducers/article.reducer';
import * as fromActions from '../../actions/article.actions';
import { Article, FAVORITE_ARTICLES } from '../../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  articles: Observable<Article[]>;

  constructor(private store: Store) {
    this.articles = store.select(articleReducer.getArticles);
  }

  showJavaArticles() {
    this.store.dispatch(new fromActions.JavaArticlesAction());
  }

  showAngularArticles() {
    this.store.dispatch(new fromActions.AngularArticlesAction());
  }

  showFavoriteArticles() {
    this.store.dispatch(
      new fromActions.FavoriteArticlesAction(FAVORITE_ARTICLES)
    );
  }
  ngOnInit(): void {}
}
