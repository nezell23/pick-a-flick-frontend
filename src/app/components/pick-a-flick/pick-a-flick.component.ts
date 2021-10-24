import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Movie } from 'src/app/models/movie';
import { Tag } from 'src/app/models/tag';
import { MoviesService } from 'src/app/services/movies.service';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-pick-a-flick',
  templateUrl: './pick-a-flick.component.html',
  styleUrls: ['./pick-a-flick.component.css']
})
export class PickAFlickComponent implements OnInit {

  // idea to display tags in dropdown list as such was inspired by code/library found here: https://github.com/NileshPatel17/ng-multiselect-dropdown
  // vars for utilizing tags:
  allTags: Tag[] = [];
  dropdownList: Tag[] = [];
  dropdownSettings: IDropdownSettings = {};

  // var to hold id of selected tag
  tagId: number;

  // var to hold movies matching search tag
  taggedMovies: Movie[] = [];

  // var to toggle between shown divs
  showMovies: boolean = true;

  constructor(private moviesService: MoviesService, private tagsService: TagsService, private router: Router) { }

  ngOnInit(): void {

    // create dropdown list:
    // get all the Tags
    this.tagsService.getTags().subscribe(response => {
      this.allTags = response;
      console.log(this.allTags);
      // assign Tags array to dropdownList
      this.dropdownList = this.allTags;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });

    this.dropdownSettings = {
      singleSelection: true,
      idField: 'tagId',
      textField: 'tagName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  // when tag is selected, set this.tagId equal to the id of the selected tag
  onItemSelect(item: any) {
    console.log(item);
    this.tagId = item.tagId;
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  // pass in this.tagId (which is id of selected tag) to get all movies linked to that tag
  findFlickByTag() {
    this.moviesService.getMoviesByTag(this.tagId).subscribe(response => {
      this.taggedMovies = response;
      if (this.taggedMovies.length > 0) {
        this.showMovies = true;
      }
      else {
        this.showMovies = false;
      }
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
}
