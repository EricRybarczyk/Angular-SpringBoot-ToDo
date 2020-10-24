import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../../app.constants';

export class HelloWorldBean {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(): Observable<HelloWorldBean> {
    console.log('Executing Hello World Bean Service');
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/`);
  }

  executeHelloWorldServiceWithPath(inputName: string): Observable<HelloWorldBean> {
    console.log('Executing Hello World Bean with Path Service, inputName = ' + inputName);
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/path-var/${inputName}`);
  }

}
