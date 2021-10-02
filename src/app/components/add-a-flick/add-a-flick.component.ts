import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Tag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-a-flick',
  templateUrl: './add-a-flick.component.html',
  styleUrls: ['./add-a-flick.component.css']
})
export class AddAFlickComponent implements OnInit {

  // idea to display tags in dropdown list as such was inspired by code/library found here: https://github.com/NileshPatel17/ng-multiselect-dropdown
  // vars for utilizing tags:
  allTags: Tag[] = [];
  dropdownList: Tag[] = [];
  dropdownSettings: IDropdownSettings = {};

  // var to hold new movie info
  newMovie: Movie = new Movie();

  constructor(private moviesService: MoviesService, private tagsService: TagsService, private router: Router) { }

  ngOnInit() {
    // create dropdown list:
    // get all the Tags
    this.tagsService.getTags().subscribe(response => {
      this.allTags = response;
      // assign Tags array to dropdownList
      this.dropdownList = this.allTags;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

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

  // take movie info from form & add to DB when add button clicked
  addFlick() {
    // if user did not input image url, assign to stock image
    if (this.newMovie.imageUrl == null) {
      this.newMovie.imageUrl = "https://media.istockphoto.com/vectors/silhouette-of-cinema-camera-on-yellow-banner-vector-id657482632?k=20&m=657482632&s=612x612&w=0&h=H6CB54Dqlo9xy3GuyTleJYsl91YhOLlDESqPepgqDpA=";
    }
    this.moviesService.addMovie(this.newMovie).subscribe(response => {
      this.router.navigate(["movies"])
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }
}