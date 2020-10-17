import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nginfo',
  templateUrl: './nginfo.component.html',
  styleUrls: ['./nginfo.component.css']
})
export class NginfoComponent implements OnInit {
  title = 'Angular Experiment';
  message = 'This is going to be fun!';

  constructor() { }

  ngOnInit(): void {
  }

}
