import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;

  login(username: string, password: string): void {
    console.log(`Iniciando sesión con usuario: ${username}`);
    this.token = 'fake-jwt-token'; // Simula obtener un token del servidor
  }

  getToken(): string | null {
    return this.token;
  }

  logout(): void {
    this.token = null;
    console.log('Sesión cerrada');
  }
}