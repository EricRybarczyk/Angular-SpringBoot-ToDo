import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    if (this.usernameValue === 'fakeUsername' && this.passwordValue === 'qwerty1234') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
