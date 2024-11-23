import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password }; // Simula obtener un token del servidor
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  logout(): void {
    localStorage.removeItem('token');
    console.log('Sesion Cerrada')
  }
}