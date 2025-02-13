import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-non-log-password',
  imports: [],
  templateUrl: './send-non-log-password.component.html',
  styleUrl: './send-non-log-password.component.css',
})
export class SendNonLogPasswordComponent {
  router = inject(Router);

  success() {
    this.router.navigate(['/forget-password/otp']);
  }
}
