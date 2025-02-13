import { Component, inject } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-non-log-password',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './non-log-password.component.html',
  styleUrl: './non-log-password.component.css',
})
export class NonLogPasswordComponent {
  router = inject(Router);

  activeRouter: string = '';

  ngOnInit(): void {
    this.getActiveRoute();
  }

  getActiveRoute() {
    this.activeRouter = this.router.url;
    this.router.events.subscribe({
      next: (response) => {
        this.activeRouter = this.router.url;
      },
    });
  }
}
