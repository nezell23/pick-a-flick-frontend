import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // environment.apiBaseUrlUsers: 'http://localhost:8080/api'
  apiServerUrl: string = environment.apiBaseUrlUsers;

  constructor(private http: HttpClient) { }

  // get all users READ
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/users/all`);
  }

  // get user by id READ
  // need to provide userId
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/users/find/${userId}`);
  }

  // edit user UPDATE
  // need to provide editId and updatedUser info
  editUser(editId: number, updatedUser: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/users/update/${editId}`, updatedUser);
  }

  // add user CREATE
  // need to provide newUser info
  addUser(newUser: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/users/add`, newUser);
  }

  // delete user DELETE
  // need to provide deleteId
  deleteUser(deleteId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/users/delete/${deleteId}`);
  }
  
}