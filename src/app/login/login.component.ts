import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameValue = 'defaultUsername';
  passwordValue = '';
  validationErrorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // dependency injection is baked-in to Angular
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  handleLogin(): void {
    if (this.usernameValue === 'fakeUsername' && this.passwordValue === 'qwerty1234') {
      this.router.navigate(['welcome']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
