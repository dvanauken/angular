import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user.model'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    // Assuming 'assets/users.json' is the correct path to your JSON file
    return this.http.get<User[]>('assets/users.json');
  }

  setCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
  }

  // Any other user-related methods can be added here
}
