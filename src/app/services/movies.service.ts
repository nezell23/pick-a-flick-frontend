import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalVariable } from 'global';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // GlobalVariable.BASE_API_URL = http://localhost:3000
  // this is url for mock DB - update to backend later
  apiServerUrl: string = GlobalVariable.BASE_API_URL;

  constructor(private http: HttpClient) { }

  // get all movies READ
  getMovies(tag?: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiServerUrl}/movies?tag=${tag}`);
  }


  // get movie by id READ
  // need to provide movieId
  getMovieById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiServerUrl}/movies/${movieId}`);
  }

  // edit movie UPDATE
  // need to provide editId and updatedMovie info
  editMovie(editId: number, updatedMovie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiServerUrl}/movies/${editId}`, updatedMovie);
  }

  // add movie CREATE
  // need to provide newMovie info
  addMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.apiServerUrl}/movies`, newMovie);
  }

  // delete movie DELETE
  // need to provide deleteId
  deleteMovie(deleteId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/movies/${deleteId}`);
  }
}
