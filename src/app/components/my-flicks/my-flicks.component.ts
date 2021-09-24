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

  // var to toggle between shown divs
  showMovies: boolean = true;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.moviesService.getMovies().subscribe(response => {
      this.allMovies = response;
    });
  }

  // searchMovies code was based on: https://github.com/getarrays/employeemanagerapp
  searchMovies(key: string) {
    const results: Movie[] = [];
    for (const movie of this.allMovies) {
      if (movie.movieTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(movie);
        this.showMovies = true;
        this.allMovies = results;
      }
    }
    if (results.length === 0) {
      this.showMovies = false;
    }
    if (!key) {
      this.showMovies = true;
      this.getAllMovies();
    }
  }

}
