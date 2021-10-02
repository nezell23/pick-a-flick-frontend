import { HttpErrorResponse } from '@angular/common/http';
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
  editTag: Tag = new Tag();

  tagId: number;

  // to specify whether user is editing tags or not - displays different div for true vs. false
  isEdit: boolean = false;

  constructor(private tagsService: TagsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTags();
  }

  // get all the Tags
  getAllTags() {
    this.tagsService.getTags().subscribe(response => {
      this.allTags = response;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  // called when Update button is clicked
  updateTag(tagId: number, editTag: Tag) {
    this.tagsService.editTag(tagId, editTag).subscribe(response => {
      this.getAllTags();
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  // called when delete button is clicked to delete a tag
  deleteTag(tagId: number) {
    this.tagsService.deleteTag(tagId).subscribe(response => {
      this.getAllTags();
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  // called when add button is clicked - user wants to add a new tag
  addTag() {
    // max of 15 tags - checks to see if limit has been reached yet before allowing additional tags to be added
    if (this.allTags.length < 15) {
      this.tagsService.addTag(this.newTag).subscribe(response => {
        this.getAllTags();
      },
        (error: HttpErrorResponse) => {
          alert(error.message);
        });
    }
    else {
      alert("Max of 15 tags - please delete a tag to create a new one.");
    }

  }

  // called when editTags button is clicked to toggle between display-only and editable div
  showUpdateTags(tagId: number) {
    this.isEdit = true;
    this.tagId = tagId;
    this.tagsService.getTagById(tagId).subscribe(response => {
      this.editTag = response;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  showAllTags() {
    this.isEdit = false;
  }
}