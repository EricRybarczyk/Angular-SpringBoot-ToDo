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

  ngOnInit(): void {
    this.usernameValue = this.route.snapshot.params.name;
  }

  getWelcomeMessage(): void {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessResponse(response)
    );
  }

  handleSuccessResponse(response: HelloWorldBean): void {
    this.welcomeMessageFromService = response.message;
  }

}
