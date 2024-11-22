import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getToken(); // El inspector usa el transporte para obtener el token

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`, // Agrega el permiso al camión
        },
      });
    }

    return next.handle(req); // Deja pasar el camión
  }
}