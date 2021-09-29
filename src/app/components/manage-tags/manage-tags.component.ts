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
  tagId: number; 
  isEdit: boolean = false;

  constructor(private tagsService: TagsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTags();
  }

  // get all the Tags
  getAllTags() {
    this.tagsService.getTags().subscribe(response => {
    this.allTags = response;
  });
}

  // called when Update button is clicked
  updateTag(tagId: number, editTag: Tag) {
    this.tagsService.editTag(tagId, editTag).subscribe(response => {
      this.getAllTags();
    })
  }

  // called when delete button is clicked to delete a tag
  deleteTag(tagId: number) {
    this.tagsService.deleteTag(tagId).subscribe(response => {
      this.getAllTags();
    });
  }

  // called when add button is clicked - user wants to add a new tag
  addTag() {
    this.tagsService.addTag(this.newTag).subscribe(response => {
      this.getAllTags();
    })
  }

  // called when editTags button is clicked to toggle between display-only and editable div
  showUpdateTags(tagId: number) {
    this.isEdit = true;
    this.tagId = tagId;
    this.tagsService.getTagById(tagId).subscribe(response => {
      this.editTag = response;
    });
  }

  showAllTags() {
    this.isEdit = false;
  }
  
}