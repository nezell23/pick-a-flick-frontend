import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: User = new User();

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {

    this.usersService.getUserInfo().subscribe(response => {
      this.user = response;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  getToken() {
    return localStorage.getItem("token");
  }

  onLogout() {
    localStorage.clear();
    this.usersService.isUserLoggedIn = false;
    console.log("Logged out, isUserLoggedIn: " + this.usersService.isUserLoggedIn);
  }
}