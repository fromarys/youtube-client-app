import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorage } from 'src/app/shared/enums/enums';
import { LoginService } from '../../services/login/login.service';
import { IUserData } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public filterIsShown: boolean = false;
  public logOutIsShown: boolean = false;
  public userName: IUserData | string = 'Your Name';
  constructor(protected loginService: LoginService) {}

  ngOnInit(): void {
    const userData: string | null = localStorage.getItem(LocalStorage.auth);
    if (userData) {
      this.userName = JSON.parse(userData).login;
    }
    this.loginService.$authData.subscribe((user) => {
      this.userName = user.login;
    });
  }

  public switchFilterState(): void {
    this.filterIsShown = !this.filterIsShown;
  }

  ngOnDestroy(): void {
    this.loginService.$authData.unsubscribe();
  }

  public logOut(): void {
    this.loginService.logOut();
  }
}
