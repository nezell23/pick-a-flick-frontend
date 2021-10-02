import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = {
    username: "",
    password: ""
  }
  token: string = '';
  error: string = '';

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void { }

  onLogin() {
    console.log(this.loginForm.username + "logged in successfully!");
    this.usersService.loginUser(this.loginForm.username, this.loginForm.password)
      .subscribe(
        res => {
          this.token = res.headers.get("Authorization");
          localStorage.setItem("token", this.token);
          this.usersService.isLoggedIn();
          this.router.navigate(["home"]);
        },
        error => {
          this.error = "Unable to login with username and password."
          console.log("Login unsuccessful.");
          alert(this.error);
        }
      );
  }
}