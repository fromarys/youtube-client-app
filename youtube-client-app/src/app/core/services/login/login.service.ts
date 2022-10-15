import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LocalStorage } from 'src/app/shared/enums/enums';
import { IUserCredentials, IAuthData, IUserData } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  public $authData = new Subject<IAuthData>();
  constructor(private router: Router) {}

  isAuthorized(): boolean {
    return !!localStorage.getItem(LocalStorage.auth);
  }

  public logIn(user: IUserCredentials): void {
    const token: string = this.getToken();
    const userData: IUserData = {
      login: user.login,
      token,
    };
    this.setUserState(this.setAuthdata(true, user.login));
    localStorage.setItem(LocalStorage.auth, JSON.stringify(userData));
    this.router.navigate(['']);
  }

  public logOut(): void {
    this.setUserState(this.setAuthdata(false));
    localStorage.removeItem(LocalStorage.auth);
    this.router.navigate(['/auth']);
  }

  private setUserState(data: IAuthData) {
    this.$authData.next(data);
  }

  private getToken(): string {
    return this.getRandomString() + this.getRandomString();
  }

  private getRandomString(): string {
    return Math.random().toString(36).substr(2);
  }

  private setAuthdata(isLoggedIn: boolean, login = '') {
    const authData: IAuthData = {
      isLoggedIn,
      login,
    };
    return authData;
  }
}
