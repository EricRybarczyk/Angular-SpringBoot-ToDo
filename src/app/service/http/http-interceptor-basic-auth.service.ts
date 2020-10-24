import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BasicAuthenticationService} from '../auth/basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private authenticationService: BasicAuthenticationService,) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const basicAuthHeader = this.authenticationService.getAuthenticationToken();
    const username = this.authenticationService.getAuthenticatedUser();
    if (basicAuthHeader && username) {
      // can't directly modify the request so we clone and add the Authorization header
      request = request.clone({
        setHeaders: {
          Authorization : basicAuthHeader
        }
      });
    }

    // continue the filter execution
    return next.handle(request);
  }
}
