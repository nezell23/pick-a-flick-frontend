import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { FormControl } from '@angular/forms'; //added this for Material
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Tag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags.service';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-add-a-flick',
  templateUrl: './add-a-flick.component.html',
  styleUrls: ['./add-a-flick.component.css']
})
export class AddAFlickComponent implements OnInit {

  // vars for utilizing tags:
  allTags: Tag[] = [];
  tagName: string;
  array: string[] = [];
  dropdownList: string[] = [];
  dropdownSettings = {};

  // var to hold new movie info
  newMovie: Movie = new Movie();

  constructor(private moviesService: MoviesService, private tagsService: TagsService, private router: Router) { }

  ngOnInit() {

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

  // take movie info from form & add to DB when add button clicked
  addFlick() {
    this.moviesService.addMovie(this.newMovie).subscribe(response => {
      this.router.navigate(["movies"])  // later, route to View Flick page instead, once I figure out how to grab new movieId!
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

}
