import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Adjust the path as necessary


@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = 'admin';
  password: string = 'admin';
  loginFailed: boolean = false; // boolean flag to indicate login failure


  constructor(private authService: AuthService, private router: Router) {

  }

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/app/page1']); // navigate to home or other page on successful login
      this.loginFailed = false; // Reset login failure flag
    } else {
      // handle login failure
      this.loginFailed = true; // Set login failure flag
    }
  }
  }
