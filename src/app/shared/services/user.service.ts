import { Injectable, effect, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Credentials, LoggedInUser, User } from '../interfaces/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

const API_URL = `${environment.apiURL}/api`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);

  user = signal<LoggedInUser | null>(null);

  constructor() {
    const access_token =localStorage.getItem('access_token');
    
    if (access_token) {
      const decodedTokenSubject = jwtDecode(access_token)
      .sub as unknown as LoggedInUser;
      this.user.set({
        username: decodedTokenSubject as any,
        //email: decodedTokenSubject.email,
      })
    }

    effect(() => {
      if (this.user) {
        console.log('User logged in', this.user().username);
      } else {
        console.log('No user Logged In');
      }
    });
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(`${API_URL}/users/register`, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  check_duplicate_email(email: string) {
    return this.http.get<{ message: string }>(
      `${API_URL}/check_duplicate_email/${email}`,
    );
  }

  loginUser(credentials: Credentials) {
    return this.http.post<{ access_token: string }>(
      `${API_URL}/auth/login`,
      credentials,
    );
  }

  logoutUser() {
    this.user.set(null);
    localStorage.removeItem('access_token');
    this.router.navigate(['user-login']);
  }
}
