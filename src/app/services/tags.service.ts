import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  // apiBaseUrl: 'http://localhost:3000'  this is for mock DB - update this to match backend later
  apiServerUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // get all tags READ
  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>('${this.apiServerUrl}/tags');
  }

  // edit tag UPDATE
  // need to provide editId and updatedTag info
  editTag(editId: number, updatedTag: Tag): Observable<Tag> {
    return this.http.put<Tag>('${this.apiServerUrl}/tags/${editId}', updatedTag);
  }

  // add tag CREATE
  // Need to provide newTag info
  addTag(newTag: Tag): Observable<Tag> {
    return this.http.post<Tag>('${this.apiServerUrl}/tags', newTag);
  }

  // delete tag DELETE
  // need to provide deleteId
  deleteTag(deleteId: number): Observable<any> {
    return this.http.delete<any>('${this.apiServerUrl}/tags/${deleteId}');
  }

}
