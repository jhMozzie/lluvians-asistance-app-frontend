import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  /**
   * Método para iniciar sesión
   * @param email Correo electrónico del usuario
   * @param password Contraseña del usuario
   */
  login(email: string, password: string): Observable<any> {
    const body = { email, password }; // Simula obtener un token del servidor
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  /**
   * Método para cerrar sesión
   */
  logout(): void {
    localStorage.removeItem('token');
    console.log('Sesión cerrada');
  }

  /**
   * Método para obtener el token almacenado en localStorage
   * @returns Token del usuario o null si no está almacenado
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}