import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-password',
  imports: [],
  templateUrl: './otp-password.component.html',
  styleUrl: './otp-password.component.css',
})
export class OtpPasswordComponent {
  router = inject(Router);

  success() {
    this.router.navigate(['/forget-password/passreset']);
  }
}
