import { Component, inject, Input } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  @Input() isLogin: boolean = false;

  router = inject(Router);

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
