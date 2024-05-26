import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'petcarefrontend';

  constructor(private router: Router) { }

  shouldShowNavbar(): boolean {
    // Si la ruta es login o signup no mostrará el navbar
    return this.router.url !== '/login' && this.router.url !== '/signup';  }
}
