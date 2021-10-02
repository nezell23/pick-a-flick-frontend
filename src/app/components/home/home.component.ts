import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { User } from 'src/app/models/user';
import { MoviesService } from 'src/app/services/movies.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = new User();
  recentMovies: Movie[] = [];

  constructor(private usersService: UsersService, private moviesService: MoviesService) { }

  ngOnInit(): void {

    this.usersService.getUserInfo().subscribe(response => {
      this.user = response;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });

    this.moviesService.getRecentMovies().subscribe(response => {
      this.recentMovies = response;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }
}