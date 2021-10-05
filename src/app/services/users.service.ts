import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

// Code for authentication taken from: https://developer.okta.com/blog/2019/05/16/angular-authentication-jwt#add-an-angular-client-with-jwt-authentication
export class UsersService implements CanActivate {

  apiServerUrl: string = environment.apiBaseUrlUsers;

  isUserLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  // checks to see if the user is logged in and routes them accordingly
  // based on code by JavaInUse: https://www.youtube.com/watch?v=QQxqHT7yhHc&t=104s
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isUserLoggedIn) {
      return true;
    }
    else {
      alert("Please login or create a new account!");
      this.router.navigate(['login']);
      return false;
    }
  }

  // for new users to register
  addUser(newUser: User): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/api/users/add`, newUser);
  } 
  
  // for user to login
  loginUser(username: string, password: string): Observable<any> {
    let loginInfo = {
      username,
      password
    }
    return this.http.post<any>(`${this.apiServerUrl}/login`, loginInfo, { observe: 'response' })
  } 

  // gets user data from backend to display on user's Home page
  getUserInfo(): Observable<any> {
    let myHeaders = {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
    return this.http.get(`${this.apiServerUrl}/api/users/find/username`, {headers: myHeaders});
  }

  isLoggedIn(): boolean {
    if(!localStorage.getItem("token")) {
      window.alert("You are not logged in");
      this.router.navigate(["login"]);
      this.isUserLoggedIn = false;
      return false;
    }
    else {
      this.isUserLoggedIn = true;
      console.log("isUserLoggedIn: " + this.isUserLoggedIn);
      return true;
    }
  }
}