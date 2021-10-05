import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Movie } from 'src/app/models/movie';
import { Tag } from 'src/app/models/tag';
import { MoviesService } from 'src/app/services/movies.service';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-edit-flick',
  templateUrl: './edit-flick.component.html',
  styleUrls: ['./edit-flick.component.css']
})
export class EditFlickComponent implements OnInit {

  // var to hold movie info to be edited
  editMovie: Movie = new Movie();
  currentId: number;

  // vars for utilizing tags
  allTags: Tag[] = [];
  dropdownList: Tag[] = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(private moviesService: MoviesService, private tagsService: TagsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the id of the movie being updated
    this.currentId = parseInt(this.route.snapshot.paramMap.get("movieId"));

    // display movie info in fields to edit
    this.moviesService.getMovieById(this.currentId).subscribe(response => {
      this.editMovie = response;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });

    // create dropdown list:
    // get all the Tags
    this.tagsService.getTags().subscribe(response => {
      this.allTags = response;
      // assign Tags array to dropdownList
      this.dropdownList = this.allTags;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'tagId',
      textField: 'tagName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  // take movie info from form & update in DB when save button clicked
  saveFlick() {
    // if user did not input image url, assign to stock image
    if (!this.editMovie.imageUrl) {
      this.editMovie.imageUrl = "https://media.istockphoto.com/vectors/silhouette-of-cinema-camera-on-yellow-banner-vector-id657482632?k=20&m=657482632&s=612x612&w=0&h=H6CB54Dqlo9xy3GuyTleJYsl91YhOLlDESqPepgqDpA=";
    }
    this.moviesService.editMovie(this.currentId, this.editMovie).subscribe(response => {
      this.router.navigate([`movies/${this.currentId}`])
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  goBack() {
    this.router.navigate([`movies/${this.currentId}`]);
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }
}
