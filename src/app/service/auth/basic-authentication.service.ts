import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  static KEY_AUTHENTICATED_USER = 'authenticatedUser';
  static KEY_AUTHENTICATION_TOKEN = 'token';

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<AuthenticationDetails> {
    console.log('BasicAuthenticationService.authenticate called');
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    const requestHeaders = new HttpHeaders(
      {Authorization: basicAuthHeaderString}
    );
    return this.http.get<AuthenticationDetails>(`${API_URL}/basic-auth/`, {headers: requestHeaders})
      .pipe( // perform additional operations on the response before returning the Observable
        map( data => {
          console.log('BasicAuthenticationService received successful response');
          sessionStorage.setItem(BasicAuthenticationService.KEY_AUTHENTICATED_USER, username);
          sessionStorage.setItem(BasicAuthenticationService.KEY_AUTHENTICATION_TOKEN, basicAuthHeaderString);
          return data; // this is how we provide the Observable
        },
          error => {
            console.log('BasicAuthenticationService received error response');
            return error;
          }
        )
      );
  }

  isUserAuthenticated(): boolean {
    return !(sessionStorage.getItem(BasicAuthenticationService.KEY_AUTHENTICATED_USER) === null);
  }

  getAuthenticatedUser(): string {
    return sessionStorage.getItem(BasicAuthenticationService.KEY_AUTHENTICATED_USER);
  }

  getAuthenticationToken(): string {
    if (this.isUserAuthenticated()) {
      return sessionStorage.getItem(BasicAuthenticationService.KEY_AUTHENTICATION_TOKEN);
    }
    return '';
  }

  logout(): void {
    sessionStorage.removeItem(BasicAuthenticationService.KEY_AUTHENTICATED_USER);
    sessionStorage.removeItem(BasicAuthenticationService.KEY_AUTHENTICATION_TOKEN);
  }
}

export class AuthenticationDetails {
  constructor(public message: string) {
  }
}
