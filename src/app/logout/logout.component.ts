import { Component, OnInit } from '@angular/core';
import {BasicAuthenticationService} from '../service/auth/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.logout();
  }

}
