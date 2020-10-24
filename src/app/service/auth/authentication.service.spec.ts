import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  const KEY_AUTHENTICATED_USER = 'authenticatedUser';
  const VALID_USERNAME = 'demouser';
  const INVALID_USERNAME = 'qwerty';
  const VALID_PASSWORD = 'ng10';
  const INVALID_PASSWORD = 'xyz123';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);

    // mock SessionStorage
    const valueStore = {};
    const mockSessionStorage = {
      getItem: (key: string): string => {
        return key in valueStore ? valueStore[key] : null;
      },
      setItem: (key: string, value: string) => {
        valueStore[key] = value;
      },
      removeItem: (key: string) => {
        delete valueStore[key];
      }
    };

    spyOn(sessionStorage, 'getItem').and.callFake(mockSessionStorage.getItem);
    spyOn(sessionStorage, 'setItem').and.callFake(mockSessionStorage.setItem);
    spyOn(sessionStorage, 'removeItem').and.callFake(mockSessionStorage.removeItem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // authenticate -----------------------------------------------------------------------------------------------------

  it('#authenticate should return true for valid credentials', () => {
    expect(service.authenticate(VALID_USERNAME, VALID_PASSWORD)).toBeTrue();
  });

  it('#authenticate should return false for invalid credentials', () => {
    expect(service.authenticate(INVALID_USERNAME, INVALID_PASSWORD)).toBeFalse();
  });

  it('#authenticate should return false for valid username with invalid password', () => {
    expect(service.authenticate(VALID_USERNAME, INVALID_PASSWORD)).toBeFalse();
  });

  it('#authenticate should save valid username to sessionStorage', () => {
    service.authenticate(VALID_USERNAME, VALID_PASSWORD);
    expect(sessionStorage.getItem(KEY_AUTHENTICATED_USER)).toEqual(VALID_USERNAME);
  });

  // isUserAuthenticated ----------------------------------------------------------------------------------------------

  it('#isUserAuthenticated should return true when valid credentials have been authenticated', () => {
    service.authenticate(VALID_USERNAME, VALID_PASSWORD);
    expect(service.isUserAuthenticated()).toBeTrue();
  });

  it('#isUserAuthenticated should return false when no user is authenticated', () => {
    expect(service.isUserAuthenticated()).toBeFalse();
  });

  // logout -----------------------------------------------------------------------------------------------------------

  it('#logout should remove the username value from sessionStorage', () => {
    service.authenticate(VALID_USERNAME, VALID_PASSWORD);
    service.logout();
    expect(sessionStorage.getItem(KEY_AUTHENTICATED_USER)).toBeNull();
    expect(service.isUserAuthenticated()).toBeFalse();
  });
});
