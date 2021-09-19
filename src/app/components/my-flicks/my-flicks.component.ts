import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-my-flicks',
  templateUrl: './my-flicks.component.html',
  styleUrls: ['./my-flicks.component.css']
})
export class MyFlicksComponent implements OnInit {

  // var to hold my movies
  allMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.moviesService.getMovies().subscribe(response => {
      console.log(response)
      this.allMovies = response;
    });
  }

  searchMovies(key: string) {
    const results: Movie[] = [];
    for (const movie of this.allMovies) {
      if (movie.movieTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(movie);
      }
    }
    this.allMovies = results;
    if (results.length === 0 || !key) {
      this.getAllMovies();
    }
  }

}
