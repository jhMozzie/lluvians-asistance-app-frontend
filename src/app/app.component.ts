import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Para renderizar rutas dinámicas
  templateUrl: './app.component.html', // Apunta al archivo HTML externo
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}