import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameValue = 'username';
  passwordValue = '';
  validationErrorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // dependency injection is baked-in to Angular
  constructor(private router: Router, private authenticationService: HardcodedAuthenticationService) {
  }

  ngOnInit(): void {
  }

  handleLogin(): void {
    if (this.authenticationService.authenticate(this.usernameValue, this.passwordValue)) {
      this.router.navigate(['welcome', this.usernameValue]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
