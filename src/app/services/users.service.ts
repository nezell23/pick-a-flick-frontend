import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

// Code for authentication taken from: https://developer.okta.com/blog/2019/05/16/angular-authentication-jwt#add-an-angular-client-with-jwt-authentication
export class UsersService {

  // environment.apiBaseUrlUsers: 'http://localhost:8080'
  apiServerUrl: string = environment.apiBaseUrlUsers;

  isUserLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  // need function to make POST request to apiServerUrl + /api/users/add route for user to register
  // Need to provide new user data (which comes from the component)
  addUser(newUser: User): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/api/users/add`, newUser);
  } 
  
  // need function to make POST request to apiServerUrl + /login route for user to login
  // Need to provide username & password as a JSON (grab data from component)
  loginUser(username: string, password: string): Observable<any> {
    let loginInfo = {
      username,
      password
    }
    return this.http.post<any>(`${this.apiServerUrl}/login`, loginInfo, { observe: 'response' })
  }  
  // This was Sujith's code but it kept returning a null response...had to add the { observe: 'response' } at very end after loginInfo...not sure why?
  // loginUser(username: string, password: string): Observable<any> {
  //   let loginInfo = {
  //     username: username,
  //     password: password
  //   }
  //   return this.http.post<any>(`${this.apiServerUrl}/login`, loginInfo);
  // }

  // need function to make GET request to apiServerUrl + /api/users/home (or whatever route I pick in backend) to get user info
  // Need to provide an Authorization header with the token from login
  getUserInfo(): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem("token")
    }
    return this.http.get(`${this.apiServerUrl}/api/users/home`, {headers: myHeaders});
  }

  isLoggedIn(): boolean {
    if(!localStorage.getItem("token")) {
      window.alert("You are not logged in");
      this.router.navigate(["login"]);
      return false;
    }
    else {
      this.isUserLoggedIn = true;
      console.log("isUserLoggedIn: " + this.isUserLoggedIn);
      return true;
    }
  }

  // isLoggedIn(): boolean {
  //   let token = localStorage.getItem("token");
  //   console.log(!(token === null))
  //   return !(token === null);
  // }

//   setLoggedIn(loggedIn: boolean, token?: string) {
//     this.loggedIn = loggedIn;
//     this.token = token;
//   }

}





// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs';
// import { User } from '../models/user';

// @Injectable({
//   providedIn: 'root'
// })

// // Code for authentication taken from: https://developer.okta.com/blog/2019/05/16/angular-authentication-jwt#add-an-angular-client-with-jwt-authentication
// export class UsersService {

//   // environment.apiBaseUrlUsers: 'http://localhost:8080'
//   apiServerUrl: string = environment.apiBaseUrlUsers;

//   private loggedIn: boolean = false;
//   private token: string;

//   constructor(private http: HttpClient) { }

//   setLoggedIn(loggedIn: boolean, token?: string) {
//     this.loggedIn = loggedIn;
//     this.token = token;
//   }

//   request(method: string, route: string, data?: any) {
//     if (method === 'GET') {
//       return this.get(route, data);
//     }

//     const header = (this.loggedIn) ? { Authorization: `Bearer ${this.token}` } : undefined;

//     return this.http.request(method, this.apiServerUrl + route, {
//       body: data,
//       responseType: 'json',
//       observe: 'body',
//       headers: header
//     });
//   }

//   get(route: string, data?: any) {
//     const header = (this.loggedIn) ? { Authorization: `Bearer ${this.token}` } : undefined;

//     let params = new HttpParams();
//     if (data !== undefined) {
//       Object.getOwnPropertyNames(data).forEach(key => {
//         params = params.set(key, data[key]);
//       });
//     }

//     return this.http.get(this.apiServerUrl + route, {
//       responseType: 'json',
//       headers: header,
//       params
//     });
//   }

//   // Might update/remove below methods and just use request method for all...

//   // get all users READ
//   getUsers(): Observable<User[]> {
//     return this.http.get<User[]>(`${this.apiServerUrl}/api/users/all`);
//   }

//   // get user by id READ
//   // need to provide userId
//   getUserById(userId: number): Observable<User> {
//     return this.http.get<User>(`${this.apiServerUrl}/api/users/find/${userId}`);
//   }

//   // edit user UPDATE
//   // need to provide editId and updatedUser info
//   editUser(editId: number, updatedUser: User): Observable<User> {
//     return this.http.put<User>(`${this.apiServerUrl}/api/users/update/${editId}`, updatedUser);
//   }

//   // add user CREATE
//   // need to provide newUser info
//   addUser(newUser: User): Observable<User> {
//     return this.http.post<User>(`${this.apiServerUrl}/api/users/add`, newUser);
//   }

//   // delete user DELETE
//   // need to provide deleteId
//   deleteUser(deleteId: number): Observable<any> {
//     return this.http.delete<any>(`${this.apiServerUrl}/api/users/delete/${deleteId}`);
//   }

// }