import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { enviroment } from '../enviroment';
import { User } from './auth.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  expiresIn: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  signinURL = `${enviroment.loginApiHost}${enviroment.apiKey}`;
  signupURL = `${enviroment.signupApiHost}${enviroment.apiKey}`;

  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signupNewUser(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.signupURL, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  autoLogin() {
    // @ts-ignore
    const user: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = localStorage.getItem('userInfo')
      ? // @ts-ignore
        JSON.parse(localStorage.getItem('userInfo'))
      : null;

    if (!user) return;

    const loadedUser = new User(
      user.email,
      user.id,
      user._token,
      new Date(user._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
    }
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.signinURL, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((error) => {
          return this.handleError(error);
        }),
        tap((respData) => {
          this.handleAuthentication(respData);
        })
      );
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('userInfo');
    this.router.navigate(['/auth']);
  }

  private handleAuthentication(respData: {
    email: string;
    localId: string;
    idToken: string;
    expiresIn: string;
  }) {
    const expirationDate = new Date(
      new Date().getTime() + +respData.expiresIn * 1000
    );
    const user = new User(
      respData.email,
      respData.localId,
      respData.idToken,
      expirationDate
    );
    this.user.next(user);
    // store user info to localStorage
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exists';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Wrong password!';
        break;
      default:
        break;
    }
    return throwError(errorMessage);
  }
}
