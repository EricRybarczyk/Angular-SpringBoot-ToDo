import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HelloWorldBean, WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: WelcomeDataService) {
  }

  usernameValue = '';
  welcomeMessageFromService = '';
  errorMessageFromService = '';

  ngOnInit(): void {
    this.usernameValue = this.route.snapshot.params.name;
  }

  getWelcomeMessage(): void {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessResponse(response: HelloWorldBean): void {
    this.errorMessageFromService = null;
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any): void {
    this.welcomeMessageFromService = null;
    this.errorMessageFromService = error.message;
  }

}
