import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const API_URL = 'http://localhost:5000/api/genres';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private http: HttpClient) {}

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(API_URL);
  }

  createGenre(name: string): Observable<Genre> {
    return this.http.post<Genre>(API_URL, { name });
  }

  deleteGenre(id: string): Observable<any> {
    return this.http.delete(API_URL + '/' + id);
  }

  updateGenre(genre: Genre) {
    return this.http.put(API_URL + '/' + genre._id, { name: genre.name });
  }
}
