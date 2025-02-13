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

interface successResponse {
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
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  successMessage: string = '';

  errorMessage: string = '';

  authService = inject(AuthService);

  router = inject(Router);

  fb = inject(FormBuilder);

  isLoading: boolean = false;

  // authForm: FormGroup = new FormGroup(
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
  //   this.passwordMissMAtch
  // );
  authForm: FormGroup = new FormGroup(
    {
      name: new FormControl('Hajajii', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl('Haji@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('Aa123456789', [
        Validators.required,
        Validators.pattern(/^[A-Z]\w{7,}$/),
      ]),
      rePassword: new FormControl('Aa123456789', [Validators.required]),
      phone: new FormControl('01002821454', [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
    },
    this.passwordMissMAtch
  );

  // authForm: FormGroup = this.fb.group(
  //   {
  //     name: [
  //       null,
  //       [
  //         Validators.required,
  //         Validators.minLength(3),
  //         Validators.maxLength(20),
  //       ],
  //     ],
  //     email: [null, [Validators.required, Validators.email]],
  //     password: [
  //       null,
  //       [Validators.required, Validators.pattern(/^[A-Z]\w{7,}$/)],
  //     ],
  //     rePassword: [{ value: null, disabled: true }], // Add validation if needed
  //     phone: [
  //       null,
  //       [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
  //     ],
  //   },
  //   { validators: this.passwordMissMAtch }
  // );

  onSubmitForm() {
    this.successMessage = '';
    this.errorMessage = '';
    this.isLoading = true;
    this.authForm.markAllAsTouched();
    if (this.authForm.valid) {
      console.log(this.authForm.value);
      this.authService.signUp(this.authForm.value).subscribe({
        next: (response: successResponse) => {
          console.log(response);
          this.successMessage = response.message;
          this.isLoading = false;
          this.authForm.reset();
          console.log(response.token);
          localStorage.setItem('token', response.token);
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1500);
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          this.errorMessage = err.error.message;
        },
      });
    }
  }

  passwordMissMAtch(group: AbstractControl) {
    // password
    // rePassword
    // return true >> if there is conflict
    // return null if there is no error

    const password = group.get('password')?.value;
    const rePassword = group.get('rePassword')?.value;
    return password === rePassword ? null : { passwordMissMatch: true };
  }
}
