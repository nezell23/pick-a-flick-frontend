import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-manage-tags',
  templateUrl: './manage-tags.component.html',
  styleUrls: ['./manage-tags.component.css']
})
export class ManageTagsComponent implements OnInit {

  // to hold all the tags
  allTags: Tag[] = [];
  newTag: Tag = new Tag();
  editTag: Tag;

  constructor(private tagsService: TagsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTags();
  }

  // get all the Tags
  getAllTags() {
    this.tagsService.getTags().subscribe(response => {
    console.log(response)
    this.allTags = response;
  });
}

  // called when Save button is clicked to save updates to tags
  updateTag() {
    console.log("updateTag works!")
  //   console.log(tagId);
  //   this.tagsService.editTag(tagId, this.allTags).subscribe(response => {
  //     console.log(this.editTag);
  //     this.getAllTags();
  //   });
  //   this.tagsService.editTag(tagId, this.editMovie).subscribe(response => {
  //     this.router.navigate([`movies/${this.currentId}`]) 
  //   });
  }

  // called when delete button is clicked to delete a tag
  deleteTag(tagId: number) {
    console.log("deleteTag works!")
    console.log(tagId);
    this.tagsService.deleteTag(tagId).subscribe(response => {
      this.getAllTags();
    });
  }

  // called when add button is clicked - user wants to add a new tag
  addTag() {
    console.log("addTag works!")
    this.tagsService.addTag(this.newTag).subscribe(response => {
      this.getAllTags();
    })
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
