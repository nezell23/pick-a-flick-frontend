import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { Tag } from 'src/app/models/tag';
import { MoviesService } from 'src/app/services/movies.service';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-view-flicks-by-tag',
  templateUrl: './view-flicks-by-tag.component.html',
  styleUrls: ['./view-flicks-by-tag.component.css']
})
export class ViewFlicksByTagComponent implements OnInit {

  tagId: number;
  currentTag: Tag = new Tag();

  // var to hold movies matching search tag
  taggedMovies: Movie[] = [];

  constructor(private moviesService: MoviesService, private tagsService: TagsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    // get the tagId of the selected tag
    this.tagId = parseInt(this.route.snapshot.paramMap.get("tagId"));
    console.log(this.tagId);

    // get the current tag info:
    this.tagsService.getTagById(this.tagId).subscribe(response => {
      this.currentTag = response;
      console.log(this.currentTag);
    })

    // pass in this.tagId (which is id of selected tag) to get all movies linked to that tag
    this.moviesService.getMoviesByTag(this.tagId).subscribe(response => {
      this.taggedMovies = response;
      console.log(this.taggedMovies);
    });

  }

}
