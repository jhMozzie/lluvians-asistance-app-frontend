# LluviansAsistanceAppFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Estructura del Proyecto

```plaintext
/src
├── app
│   ├── core                # Núcleo del proyecto: servicios globales, guardias, interceptores
│   │   ├── services        # Servicios reutilizables (autenticación, API, etc.)
│   │   │   ├── auth.service.ts
│   │   │   ├── api.service.ts
│   │   ├── guards          # Guardias de rutas (e.g., AuthGuard)
│   │   │   ├── auth.guard.ts
│   │   ├── interceptors    # Interceptores HTTP
│   │   │   ├── auth.interceptor.ts
│   │   ├── core.module.ts  # Configuración global del núcleo
│   │
│   ├── shared              # Componentes y utilidades reutilizables
│   │   ├── components      # Componentes reutilizables (botones, modales, etc.)
│   │   │   ├── button
│   │   │   │   ├── button.component.ts
│   │   │   │   ├── button.component.html
│   │   │   │   ├── button.component.scss
│   │   ├── pipes           # Pipes reutilizables
│   │   │   ├── date-format.pipe.ts
│   │   ├── directives      # Directivas reutilizables
│   │   │   ├── highlight.directive.ts
│   │   ├── models          # Modelos de datos
│   │   │   ├── user.model.ts
│   │   │   ├── product.model.ts
│   │   ├── shared.module.ts
│   │
│   ├── features            # Módulos funcionales del proyecto
│   │   ├── auth            # Módulo de autenticación
│   │   │   ├── login       # Componente de login
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.scss
│   │   │   ├── register    # Componente de registro
│   │   │   │   ├── register.component.ts
│   │   │   │   ├── register.component.html
│   │   │   │   ├── register.component.scss
│   │   │   ├── auth-routing.module.ts
│   │   │   ├── auth.module.ts
│   │   ├── dashboard       # Módulo del dashboard
│   │   │   ├── components  # Componentes del dashboard
│   │   │   ├── dashboard.module.ts
│   │   │   ├── dashboard-routing.module.ts
│   │   ├── products        # Gestión de productos
│   │   │   ├── product-list
│   │   │   ├── product-detail
│   │
│   ├── layouts             # Diseños principales de la app
│   │   ├── main-layout     # Diseño principal con header y sidebar
│   │   │   ├── main-layout.component.ts
│   │   │   ├── main-layout.component.html
│   │   │   ├── main-layout.component.scss
│   │   ├── auth-layout     # Diseño específico para login/registro
│   │   │   ├── auth-layout.component.ts
│   │   │   ├── auth-layout.component.html
│   │   │   ├── auth-layout.component.scss
│   │
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.module.ts       # Configuración global de módulos
│   ├── app-routing.module.ts
│
├── assets                  # Recursos estáticos
│   ├── images              # Imágenes generales
│   ├── styles              # Estilos globales y configuración de Tailwind
│   │   ├── tailwind.scss
│   │   ├── global.scss
│   ├── fonts               # Fuentes personalizadas
│
├── environments            # Configuración de entornos (dev, prod)
│   ├── environment.ts
│   ├── environment.prod.ts
│
├── styles.scss             # Punto de entrada para estilos globales
├── main.ts                 # Punto de entrada principal de la app
├── index.html              # Archivo HTML base
