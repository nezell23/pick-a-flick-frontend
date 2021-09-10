import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add-a-flick',
  templateUrl: './add-a-flick.component.html',
  styleUrls: ['./add-a-flick.component.css']
})
export class AddAFlickComponent implements OnInit {

  newMovie: Movie = new Movie();

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
  }

  // take movie info from form & add to DB when add button clicked
  addFlick() {
    this.moviesService.addMovie(this.newMovie).subscribe(response => {
      this.router.navigate(["movies"])  // later, route to View Flick page instead, once I figure out how to grab new movieId!
    });
  }

  // save new movie and then navigate to Tags page to add tags...need to figure out how to grab new movieId!
  saveThenAddTags() {
    this.moviesService.addMovie(this.newMovie).subscribe(response => {
      // this.router.navigate([`movies-edit-tags/${this.currentId}`])
      console.log("saveThenAddTags works!")
    });
  }

  indexTracker(index: number, value: any) {
    return index;
  }

}
