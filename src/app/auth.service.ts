import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private loginUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<any>(this.loginUrl, {}, { headers, observe: 'response' })
      .pipe(
        map(response => {
          console.log(response);
          // Check the response status code to determine if login is successful
          const isLoggedIn = response.status === 200;
          console.log(isLoggedIn);
          this.isAuthenticated = isLoggedIn;
          console.log(this.isAuthenticated);
          return isLoggedIn;
        }),
        catchError(error => {
          console.log('Error status:', error.status); // Log the error status
          console.log('Error message:', error.message); // Log the detailed error message
          console.log('Full error:', error); // Log the full error object for complete details
          return this.handleError<boolean>('login', false)(error);
        })

      );
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
