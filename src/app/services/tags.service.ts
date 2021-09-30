import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  // environment.apiBaseUrlTags: 'http://localhost:8080/api/tags'
  apiServerUrl: string = environment.apiBaseUrlTags;

  constructor(private http: HttpClient) { }

  // get all tags READ
  getTags(): Observable<Tag[]> {
    let myHeaders = {
      Authorization: localStorage.getItem("token")
    }
    return this.http.get<Tag[]>(`${this.apiServerUrl}/all`, {headers: myHeaders});
  }

  // get tag by id READ
  // need to provide tagId
  getTagById(tagId: number): Observable<Tag> {
    let myHeaders = {
      Authorization: localStorage.getItem("token")
    }
    return this.http.get<Tag>(`${this.apiServerUrl}/find/${tagId}`, {headers: myHeaders});
  }

  // edit tag UPDATE
  // need to provide editId & updatedTag info
  editTag(editId: number, updatedTag: Tag): Observable<Tag> {
    let myHeaders = {
      Authorization: localStorage.getItem("token")
    }
    return this.http.put<Tag>(`${this.apiServerUrl}/update/${editId}`, updatedTag, {headers: myHeaders});
  }

  // add tag CREATE
  // Need to provide newTag info
  addTag(newTag: Tag): Observable<Tag> {
    let myHeaders = {
      Authorization: localStorage.getItem("token")
    }
    return this.http.post<Tag>(`${this.apiServerUrl}/add`, newTag, {headers: myHeaders});
  }

  // delete tag DELETE
  // need to provide deleteId
  deleteTag(deleteId: number): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem("token")
    }
    return this.http.delete<any>(`${this.apiServerUrl}/delete/${deleteId}`, {headers: myHeaders});
  }

}
