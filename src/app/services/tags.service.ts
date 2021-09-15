import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  // in global.ts, apiBaseUrl: 'http://localhost:3000'  this is for mock DB for movies.  Once backend is connected, the base url will be the same for tags, movies, & users, so I can edit code to include the apiBaseUrl for all services later
  apiServerUrl: string = 'http://localhost:4000/tags'


  constructor(private http: HttpClient) { }

  // get all tags READ
  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.apiServerUrl);
  }

  // get tag by id READ
  // need to provide tagId
  getTagById(tagId: number): Observable<Tag> {
    return this.http.get<Tag>(`${this.apiServerUrl}/${tagId}`);
  }

  // edit tag UPDATE
  // need to provide editId & updatedTag info
  editTag(editId: number, updatedTag: Tag): Observable<Tag> {
    return this.http.put<Tag>(`${this.apiServerUrl}/${editId}`, updatedTag);
  }

  // add tag CREATE
  // Need to provide newTag info
  addTag(newTag: Tag): Observable<Tag> {
    return this.http.post<Tag>(this.apiServerUrl, newTag);
  }

  // delete tag DELETE
  // need to provide deleteId
  deleteTag(deleteId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/${deleteId}`);
  }

}
