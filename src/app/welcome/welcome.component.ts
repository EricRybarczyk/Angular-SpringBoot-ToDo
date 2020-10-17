/*  // package dev.ericrybarczyk.angular.learning
    Java explicitly declares a package.
    JS/TS equivalent: module - a file is a module (ES6)  and there is
                      no explicit declaration in code for this.
*/

/*  // import dev.ericrybarczyk.angular.learning.SomeClass
    Java imports are similar in JS/TS:
    import { ClassOne, ClassTwo } from '../path/in/app/thing.component'
    Note: no need to include  the .ts file extension
*/
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


/*  Java uses Annotations, while JS/TS uses Decorators. From the TS docs:
    >> Decorators are a stage 2 proposal for JavaScript and are available as an experimental feature of TypeScript.

    The @Component decorator takes an object as its parameter
*/
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

/*  Java classes use the public access modifier to make a class available outside the declaring package.
    JS/TS: export makes classes available outside the boundary of the declaring module (file).
    Without the export keyword, the class would become private to the declaring module.
*/
export class WelcomeComponent implements OnInit {

  /*  Java constructor uses class name as "method" name of the constructor.
      JS/TS uses the keyword constructor to define a ctor function/method
  */
  constructor(private route: ActivatedRoute) {
  }

  // TS provides the type support, but type inference also happens automatically
  message = 'string in TypeScript';
  usernameValue = '';

  messWithMessage(): void {
    this.message = 'modified message in TypeScript';
    // will not compile, wrong type:   this.message = 7;
  }

  /*
      Java method equivalent:

      @Override
      void ngOnInit() {
        // code here
      }

      Below, TS provides the return type, not present in plain JS
  */
  ngOnInit(): void {
    this.usernameValue = this.route.snapshot.params.name;
  }

}
