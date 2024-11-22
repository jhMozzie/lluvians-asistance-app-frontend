import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getToken()) {
      return true; // Tiene permiso, puede pasar
    } else {
      this.router.navigate(['/login']); // No tiene permiso, lo mandamos al login
      return false;
    }
  }
}