import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

}


// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
// import { User } from '../models/user';
// import { UsersService } from './users.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   loggedIn = new BehaviorSubject<boolean>(false);
//   token: string;

//   get isLoggedIn() {
//     return this.loggedIn.asObservable();
//   }

//   constructor(private usersService: UsersService, private router: Router) { 
//     console.log('Auth Service');
//     const userData = localStorage.getItem('user');
//     if (userData) {
//       console.log('Logged in from memory');
//       const user = JSON.parse(userData);
//       this.token = user.token;
//       this.usersService.setLoggedIn(true, this.token);
//       this.loggedIn.next(true);
//     }
//   }

//   login(user) {
//     // if (user.username !== '' && user.password !== '' ) {
//     //   return this.usersService.request('POST', '/login', {
//     //     username: user.username,
//     //     password: user.password
//     //   }).subscribe((response: any) => {
//     //     if (response.auth === true && response.token !== undefined) {
//     //       this.token = response.token;
//     //       this.usersService.setLoggedIn(true, this.token);
//     //       this.loggedIn.next(true);
//     //       const userData = {
//     //         token: this.token,
//     //       };
//     //       localStorage.setItem('user', JSON.stringify(userData));
//     //       this.router.navigateByUrl('/home');
//     //     }
//     //     else {
//     //       console.log("Invalid login credentials.");
//     //     }
//     //   });
//     // }
//     // else {
//     //   console.log("Please enter login credentials.");
//     // }
//   }

//   logout() {
//     console.log('logged out');
//     // this.usersService.setLoggedIn(false);
//     // delete this.token;

//     // this.loggedIn.next(false);
//     // localStorage.clear();
//   }

// }
