import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // this is Url for mock DB - update to backend later
  apiServerUrl: string = "http://localhost:3000/movies"

  constructor(private http: HttpClient) { }

  // get all movies READ
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiServerUrl);
  }

  // get movie by id READ
  // need to provide movieId
  getMovieById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>('${this.apiServerUrl}/${movieId}');
  }

  // edit movie UPDATE
  // need to provide editId and updatedMovie info
  editMovie(editId: number, updatedMovie: Movie): Observable<Movie> {
    return this.http.put<Movie>('${this.apiServerUrl}/${editId}', updatedMovie);
  }

  // add movie CREATE
  // Need to provide newMovie info
  addMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiServerUrl, newMovie);
  }

  // delete movie DELETE
  // need to provide deleteId
  deleteMovie(deleteId: number): Observable<any> {
    return this.http.delete<any>('${this.apiServerUrl}/${deleteId}');
  }
}
