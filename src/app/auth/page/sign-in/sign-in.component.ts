import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  successMessage: string = '';

  errorMessage: string = '';

  authService = inject(AuthService);

  router = inject(Router);

  fb = inject(FormBuilder);

  isLoading: boolean = false;

  // authForm: FormGroup = new FormGroup(
  //   {
  //     email: new FormControl('Haji@gmail.com', [Validators.required]),
  //     password: new FormControl('Aa123456789', [Validators.required]),
  //   },
  //   { updateOn: 'submit' }
  // );

  authForm: FormGroup = this.fb.group({
    email: ['Haji@gmail.com', Validators.required],
    password: ['Aa123456789', Validators.required],
  });

  onSubmitForm() {
    this.successMessage = '';
    this.errorMessage = '';
    this.isLoading = true;
    this.authForm.markAllAsTouched();
    if (this.authForm.valid) {
      console.log(this.authForm.value);
      this.authService.logIn(this.authForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this.successMessage = response.message;
          this.isLoading = false;
          console.log(response.token);
          localStorage.setItem('token', response.token);
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 500);
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          this.errorMessage = err.error.message;
        },
      });
    }
  }
}
