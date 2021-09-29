import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {

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