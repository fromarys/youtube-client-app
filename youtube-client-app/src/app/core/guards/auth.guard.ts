import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    return this.canLoad();
  }

  canLoad(): boolean {
    if (!this.authService.isAuthorized()) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
}
