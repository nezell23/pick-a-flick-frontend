import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';
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
  editMovie: Movie;
  currentId: number;

  // vars for utilizing tags
  allTags: Tag[] = [];
  tagName: string;
  array: string[] = [];
  dropdownList: string[] = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(private moviesService: MoviesService, private tagsService: TagsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the id of the movie being updated
    this.currentId = parseInt(this.route.snapshot.paramMap.get("movieId"));

    // display movie info in fields to edit
    this.moviesService.getMovieById(this.currentId).subscribe(response => {
      this.editMovie = response;
      console.log(response);
    });

    // create dropdown list:
    // get all the Tags
    this.tagsService.getTags().subscribe(response => {
      this.allTags = response;
      console.log(this.allTags);

      // pluck tagNames and push them into dropdownList array
      const allTagsPluck = from(this.allTags);
      allTagsPluck.pipe(pluck('tagName')).subscribe(response => {
        this.tagName = response;
        this.array.push(this.tagName);
        this.dropdownList = this.array;
      })
    })

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }

  // take movie info from form & update in DB when save button clicked
  saveFlick() {
    console.log("saveFlick works!")
    this.moviesService.editMovie(this.currentId, this.editMovie).subscribe(response => {
      this.router.navigate([`movies/${this.currentId}`])
    });
  }

  // save updated movie info and then navigate to Tags page to edit tags
  saveThenEditTags() {
    console.log("saveThenEditTags works!")
    this.moviesService.editMovie(this.currentId, this.editMovie).subscribe(response => {
      this.router.navigate([`movies-edit-tags/${this.currentId}`])
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

}
