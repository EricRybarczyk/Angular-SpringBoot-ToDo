import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  static KEY_AUTHENTICATED_USER = 'authenticatedUser';
  static KEY_AUTHENTICATION_TOKEN = 'token';
  static PREFIX_BEARER_TOKEN = 'Bearer '; // note: trailing space in the string is important

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<JwtToken> {
    return this.http.post<JwtToken>(
      `${API_URL}/authenticate`, {
        username,
        password
      }).pipe(
            map(
              data => {
                sessionStorage.setItem(AuthenticationService.KEY_AUTHENTICATED_USER, username);
                sessionStorage.setItem(AuthenticationService.KEY_AUTHENTICATION_TOKEN, `${AuthenticationService.PREFIX_BEARER_TOKEN} ${data.token}`);
                return data;
              },
              error => {
                console.log('JWT AuthenticationService received error response');
                return error;
              }
            )
    );
  }

  isUserAuthenticated(): boolean {
    return !(sessionStorage.getItem(AuthenticationService.KEY_AUTHENTICATED_USER) === null);
  }

  getAuthenticatedUser(): string {
    return sessionStorage.getItem(AuthenticationService.KEY_AUTHENTICATED_USER);
  }

  getAuthenticationToken(): string {
    if (this.isUserAuthenticated()) {
      return sessionStorage.getItem(AuthenticationService.KEY_AUTHENTICATION_TOKEN);
    }
    return '';
  }

  logout(): void {
    sessionStorage.removeItem(AuthenticationService.KEY_AUTHENTICATED_USER);
    sessionStorage.removeItem(AuthenticationService.KEY_AUTHENTICATION_TOKEN);
  }
}

export class JwtToken {
  constructor(public token: string) {
  }
}
