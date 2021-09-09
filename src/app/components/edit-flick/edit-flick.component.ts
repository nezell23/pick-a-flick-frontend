import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-edit-flick',
  templateUrl: './edit-flick.component.html',
  styleUrls: ['./edit-flick.component.css']
})
export class EditFlickComponent implements OnInit {

  editMovie: Movie;
  currentId: number;

  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the id of the movie being updated
    this.currentId = parseInt(this.route.snapshot.paramMap.get("movieId"));

    // display movie info in fields to edit
    this.moviesService.getMovieById(this.currentId).subscribe(response => {
      this.editMovie = response;
      console.log(response);
    });

  }

  // take movie info from form & update in DB when save button clicked
  saveFlick() {
    console.log("saveFlick works!")
    this.moviesService.editMovie(this.currentId, this.editMovie).subscribe(response => {
      this.router.navigate([`movies/${this.currentId}`]) // need to put route here for View Flick page...not sure if this is correct notation...test!
    })
  }

  
  indexTracker(index: number, value: any) {
    return index;
  };

}
