import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameValue = 'defaultUsername';
  passwordValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    // obviously we would never output a password like this in real code
    console.log(this.usernameValue + ': ' + this.passwordValue); // TODO: remove password output
  }

}
