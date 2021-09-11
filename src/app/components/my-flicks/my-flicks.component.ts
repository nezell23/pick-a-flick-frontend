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
    this.moviesService.getMovies().subscribe(response => {
      console.log(response)
      this.allMovies = response;
    });
  }

}
