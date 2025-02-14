import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

interface userSuccessResponse {
  message: string;
  user: User;
  token: string;
}

interface User {
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  errorMessage: string = '';

  successMessage: string = '';

  authService = inject(AuthService);

  router = inject(Router);

  // submitForm: FormGroup = new FormGroup(
  submitForm: FormGroup = new FormGroup({
    email: new FormControl('Haji@gmail.com', [Validators.required]),
    password: new FormControl('A1234567', [Validators.required]),
  });

  isLoading: boolean = false;

  onSubmitForm(): void {
    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';
    console.log('submit');
    console.log(this.submitForm);
    if (this.submitForm.valid) {
      console.log(this.submitForm.value);
      this.authService.signIn(this.submitForm.value).subscribe({
        next: (response: userSuccessResponse) => {
          console.log(response);
          this.successMessage = response.message;
          this.isLoading = false;
          localStorage.setItem('token', response.token);
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          this.errorMessage = err.error.message;
          this.isLoading = false;
        },
      });
    }
  }
}
