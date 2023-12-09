import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Replace with the actual path to your AuthService

@Component({
  selector: 'custom-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {

  title = 'angular';
  myOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    // ... other options
  ];
  selectedOption: string = '2';

  constructor(private authService: AuthService, private router: Router) {
  }

  logout() {
    this.authService.logout(); // Clear the authentication token or session data
    this.router.navigate(['/login']); // Redirect to the login page
  }

  onClick() {
    console.log('Button clicked!');
  }
}

