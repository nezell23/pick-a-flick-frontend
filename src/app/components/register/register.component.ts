import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // var to hold new user info
  newUser: User = new User();

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {

  }

  register() {
    this.usersService.addUser(this.newUser).subscribe(response => {
      this.router.navigate(["login"])
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
}