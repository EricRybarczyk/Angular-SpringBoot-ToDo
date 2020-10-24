import { TestBed } from '@angular/core/testing';

import { HttpInterceptorAuthenticationService } from './http-interceptor-authentication.service';

describe('HttpInterceptorAuthenticationService', () => {
  let service: HttpInterceptorAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptorAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
