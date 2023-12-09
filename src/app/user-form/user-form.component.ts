import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'custom-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const username = params['username'];
      this.loadUserData(username);
    });
  }

  loadUserData(username: string) {
    this.httpClient.get<User[]>('/assets/users.json').subscribe(users => {
      this.user = users.find(u => u.username === username) || null;
    });
  }

  onSubmit() {
    this.router.navigate(['/app/users']);
  }

  onCancel() {
    this.router.navigate(['/app/users']);
  }
  
}
