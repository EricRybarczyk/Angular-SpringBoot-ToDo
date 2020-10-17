import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password): boolean {
    return username === 'username' && password === 'ng10';
  }
}
