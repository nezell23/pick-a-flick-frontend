import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-view-flick',
  templateUrl: './view-flick.component.html',
  styleUrls: ['./view-flick.component.css']
})
export class ViewFlickComponent implements OnInit {
  
  currentMovie: Movie = new Movie();
  currentId: number;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // get the movieId of the selected movie
    this.currentId = parseInt(this.route.snapshot.paramMap.get("movieId"));

    // get movie details for that movieId
    this.moviesService.getMovieById(this.currentId).subscribe(response => {
      console.log(response);
      this.currentMovie = response;
    });
  }

    // delete movie when delete button clicked
    deleteMovieButton(currentId: number): void {
      this.moviesService.deleteMovie(currentId).subscribe(response => {
        this.router.navigate(["movies"])    
      });
    }
}