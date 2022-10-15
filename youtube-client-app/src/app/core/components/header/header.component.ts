import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorage } from 'src/app/shared/enums/enums';
import { AuthService } from '../../services/auth/auth.service';
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
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const userData: string | null = localStorage.getItem(LocalStorage.auth);
    if (userData) {
      this.userName = JSON.parse(userData).login;
    }
    this.authService.$authData.subscribe((user) => {
      this.userName = user.login;
    });
  }

  public switchFilterState(): void {
    this.filterIsShown = !this.filterIsShown;
  }

  ngOnDestroy(): void {
    this.authService.$authData.unsubscribe();
  }

  public showLogOutMenu() {
    if (this.authService.isAuthorized()) {
      this.logOutIsShown = !this.logOutIsShown;
    }
  }

  public logOut(): void {
    this.showLogOutMenu();
    this.authService.logOut();
  }
}
