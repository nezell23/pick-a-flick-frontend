import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pick-a-flick-frontend';

  // constructor(public authService: AuthService) {}

  // onLogout() {
  //   this.authService.logout();
  // }
}