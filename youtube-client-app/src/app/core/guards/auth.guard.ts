import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanLoad, CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    return this.canLoad();
  }

  canLoad(): boolean {
    if (!this.loginService.isAuthorized()) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
}
