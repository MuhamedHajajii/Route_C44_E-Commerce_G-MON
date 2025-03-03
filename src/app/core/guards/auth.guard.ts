import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const _PLATFORM_ID = inject(PLATFORM_ID);
  if (isPlatformBrowser(_PLATFORM_ID)) {
    console.log(localStorage.getItem('token'));
    const token = localStorage.getItem('token');
    if (token) {
      console.log(jwtDecode(token));
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  }
  return false;
};
