import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameValue = '';
  passwordValue = '';
  validationErrorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // dependency injection is baked-in to Angular
  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  handleLogin(): void {
    console.log('Calling Angular JWT authentication service');
    this.authenticationService.authenticate(this.usernameValue, this.passwordValue).subscribe(
      data => {
        console.log('Success response from Angular authentication service...');
        console.log(data);
        this.router.navigate(['welcome', this.usernameValue]);
        this.invalidLogin = false;
      },
      error => {
        console.log('Error response from Angular authentication service...');
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }

}
