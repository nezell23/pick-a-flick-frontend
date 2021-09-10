import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// Use this code to help with the edit tags functionality:

// export class EditFlickComponent implements OnInit {

//   editMovie: Movie;
//   currentId: number;

//   constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     // get the id of the movie being updated
//     this.currentId = parseInt(this.route.snapshot.paramMap.get("movieId"));

//     // display movie info in fields to edit
//     this.moviesService.getMovieById(this.currentId).subscribe(response => {
//       this.editMovie = response;
//       console.log(response);
//     });

//   }

//   // take movie info from form & update in DB when save button clicked
//   saveFlick() {
//     console.log("saveFlick works!")
//     this.moviesService.editMovie(this.currentId, this.editMovie).subscribe(response => {
//       this.router.navigate([`movies/${this.currentId}`]) 
//     });
//   }

//   // save updated movie info and then navigate to Tags page to edit tags
//   saveThenEditTags() {
//     console.log("saveThenEditTags works!")
//     this.moviesService.editMovie(this.currentId, this.editMovie).subscribe(response => {
//       this.router.navigate([`movies-edit-tags/${this.currentId}`])
//     });
//   }

  
//   indexTracker(index: number, value: any) {
//     return index;
//   }

// }
