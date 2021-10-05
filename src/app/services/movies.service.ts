import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiServerUrl: string = environment.apiBaseUrlMovies;

  myHeaders: any = {
    Authorization: "Bearer " + localStorage.getItem("token")
  }

  constructor(private http: HttpClient) { }

  // get all movies
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiServerUrl}/all`, {headers: this.myHeaders});
  }

  // get 10 most recently added movies
  getRecentMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiServerUrl}/recent`, {headers: this.myHeaders});
  }

  // get movie by id
  getMovieById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiServerUrl}/find/${movieId}`, {headers: this.myHeaders});
  }

  // get movies by tagId
  getMoviesByTag(tagId: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiServerUrl}/find/tag/${tagId}`, {headers: this.myHeaders});
  }

  // edit movie
  editMovie(editId: number, updatedMovie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiServerUrl}/update/${editId}`, updatedMovie, {headers: this.myHeaders});
  }

  // add movie
  addMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.apiServerUrl}/add`, newMovie, {headers: this.myHeaders});
  }

  // delete movie
  deleteMovie(deleteId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/delete/${deleteId}`, {headers: this.myHeaders});
  }
}
