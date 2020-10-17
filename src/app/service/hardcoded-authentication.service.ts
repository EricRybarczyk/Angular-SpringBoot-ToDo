import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  static KEY_AUTHENTICATED_USER = 'authenticatedUser';
  constructor() { }

  authenticate(username, password): boolean {
    if (username === 'username' && password === 'ng10') {
      sessionStorage.setItem(HardcodedAuthenticationService.KEY_AUTHENTICATED_USER, username);
      return true;
    }
    return false;
  }

  isUserAuthenticated(): boolean {
    const user = sessionStorage.getItem(HardcodedAuthenticationService.KEY_AUTHENTICATED_USER);
    return !(user === null);
  }
}
