import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-edit-tags',
  templateUrl: './edit-tags.component.html',
  styleUrls: ['./edit-tags.component.css']
})
export class EditTagsComponent implements OnInit {

  // tag name user is editing
  editTag: Tag;
  currentId: number;

  constructor(private tagsService: TagsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the id of the tag being updated
    this.currentId = parseInt(this.route.snapshot.paramMap.get("tagId"));
    console.log(this.currentId);

    // get tag that user wants to edit
    this.tagsService.getTagById(this.currentId).subscribe(response => {
      this.editTag = response;
      console.log(response);
    });

  }

  // take tag name from form & update in DB when save button clicked
  saveTag() {
    console.log("saveTag works!")
    this.tagsService.editTag(this.currentId, this.editTag).subscribe(response => {
      this.router.navigate(["tags-manage"]);
    })
    // this.moviesService.editMovie(this.currentId, this.editMovie).subscribe(response => {
    //   this.router.navigate([`movies/${this.currentId}`]) 
    // });
  }

}
