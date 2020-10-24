import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorAuthenticationService implements HttpInterceptor{

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authenticationToken = this.authenticationService.getAuthenticationToken();
    const username = this.authenticationService.getAuthenticatedUser();
    console.log('HttpInterceptorAuthenticationService - Authorization header value: ' + authenticationToken);
    if (authenticationToken && username) {
      // can't directly modify the request so we clone and add the Authorization header
      request = request.clone({
        setHeaders: {
          Authorization: authenticationToken
        }
      });
    }

    // continue the filter execution
    return next.handle(request);
  }
}
