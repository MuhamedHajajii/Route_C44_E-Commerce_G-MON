import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
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
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  errorMessage: string = '';

  successMessage: string = '';

  authService = inject(AuthService);

  router = inject(Router);

  fb = inject(FormBuilder);

  submitForm: FormGroup = this.fb.group(
    {
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [Validators.required, Validators.pattern(/^[A-Z]\w{7,}$/)],
      ],
      rePassword: [null, [Validators.required]],
      phone: [
        null,
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
      ],
    },
    { validators: this.passwordMissMatch }
  );

  // submitForm: FormGroup = new FormGroup(
  // submitForm: FormGroup = new FormGroup(
  //   {
  //     name: new FormControl(null, [
  //       Validators.required,
  //       Validators.minLength(3),
  //       Validators.maxLength(20),
  //     ]),
  //     email: new FormControl(null, [Validators.required, Validators.email]),
  //     password: new FormControl(null, [
  //       Validators.required,
  //       Validators.pattern(/^[A-Z]\w{7,}$/),
  //     ]),
  //     rePassword: new FormControl(null, [Validators.required]),
  //     phone: new FormControl(null, [
  //       Validators.required,
  //       Validators.pattern(/^01[0125][0-9]{8}$/),
  //     ]),
  //   },
  //   { validators: this.passwordMissMatch }
  // );

  isLoading: boolean = false;

  onSubmitForm(): void {
    this.successMessage = '';
    this.errorMessage = '';
    // this.submitForm.markAllAsTouched();
    if (this.submitForm.valid) {
      this.isLoading = true;
      console.log(this.submitForm.value);
      this.authService.signUp(this.submitForm.value).subscribe({
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

  passwordMissMatch(group: AbstractControl) {
    const password = group.get('password')?.value;
    const rePassword = group.get('rePassword')?.value;
    return password === rePassword ? null : { missMatch: true };
  }
}
