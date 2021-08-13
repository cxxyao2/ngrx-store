- @ngrx/store : a state management tool. It is equivalent to Redux in React.

- npm i @ngrx/store --save

## build a CRUD application using @ngrx/store

> define models

> define actions

> define states

app level state + feature specific state

> define reducers, include

- feature specific reducer
- feature specific selector
- reducers: ActionReducerMap

## modify app.module.ts

> imports: StoreModule.forRoot(reducers, { metaReducers }),

## use store in component

```
 courses: Observable<Course[]>;

  constructor(private store: Store) {
    this.courses = store.select(courseReducer.getCourses);
  }

    showJavaCourses() {
    this.store.dispatch(new fromActions.JavaCoursesAction());
  }
```
