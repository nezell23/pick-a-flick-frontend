import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

// Code for authentication taken from: https://developer.okta.com/blog/2019/05/16/angular-authentication-jwt#add-an-angular-client-with-jwt-authentication
export class UsersService {

  // environment.apiBaseUrlUsers: 'http://localhost:8080/api'
  apiServerUrl: string = environment.apiBaseUrlUsers;

  private loggedIn: boolean = false;
  private token: string;

  constructor(private http: HttpClient) { }

  setLoggedIn(loggedIn: boolean, token?: string) {
    this.loggedIn = loggedIn;
    this.token = token;
  }

  request(method: string, route: string, data?: any) {
    if (method === 'GET') {
      return this.get(route, data);
    }

    const header = (this.loggedIn) ? { Authorization: `Bearer ${this.token}` } : undefined;

    return this.http.request(method, this.apiServerUrl + route, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: header
    });
  }

  get(route: string, data?: any) {
    const header = (this.loggedIn) ? { Authorization: `Bearer ${this.token}` } : undefined;

    let params = new HttpParams();
    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }

    return this.http.get(this.apiServerUrl + route, {
      responseType: 'json',
      headers: header,
      params
    });
  }

  // Might update/remove below methods and just use request method for all...

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