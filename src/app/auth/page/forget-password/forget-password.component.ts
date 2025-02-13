import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [RouterOutlet],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
})
export class ForgetPasswordComponent {
  router = inject(Router);

  success() {
    this.router.navigate(['/forget-password/otp']);
  }
}
