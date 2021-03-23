import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, throwError } from 'rxjs';
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
  registered? : boolean
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  signinURL = `${enviroment.loginApiHost}${enviroment.apiKey}`;
  signupURL = `${enviroment.signupApiHost}${enviroment.apiKey}`;
  user  = new Subject<User>();

  constructor(private http: HttpClient) {}

  signupNewUser(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.signupURL, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((error) => {
        return  this.handleError(error)
        })
      );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.signinURL, {email, password, returnSecureToken: true})
      .pipe(
        catchError((error) => {
          return this.handleError(error)}),
        tap(respData => {
            this.handleAuthentication(respData);
        })
      )
  }

  private handleAuthentication(respData: {
    email: string;
    localId: string;
    idToken: string;
    expiresIn: string;
  }) {

          const expirationDate = new Date(new Date().getTime() + +respData.expiresIn*1000);
          const user = new User(respData.email, respData.localId, respData.idToken, expirationDate);
          this.user.next(user)
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
