import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  apiServerUrl: string = environment.apiBaseUrlTags;

  myHeaders: any = {
    Authorization: "Bearer " + localStorage.getItem("token")
  }

  constructor(private http: HttpClient) { }

  // get all tags
  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.apiServerUrl}/all`, {headers: this.myHeaders});
  }

  // get tag by id
  getTagById(tagId: number): Observable<Tag> {
    return this.http.get<Tag>(`${this.apiServerUrl}/find/${tagId}`, {headers: this.myHeaders});
  }

  // edit tag 
  editTag(editId: number, updatedTag: Tag): Observable<Tag> {
    return this.http.put<Tag>(`${this.apiServerUrl}/update/${editId}`, updatedTag, {headers: this.myHeaders});
  }

  // add tag 
  addTag(newTag: Tag): Observable<Tag> {
    return this.http.post<Tag>(`${this.apiServerUrl}/add`, newTag, {headers: this.myHeaders});
  }

  // delete tag 
  deleteTag(deleteId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/delete/${deleteId}`, {headers: this.myHeaders});
  }

}
