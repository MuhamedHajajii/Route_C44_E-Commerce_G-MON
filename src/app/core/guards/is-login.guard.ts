import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isLoginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  let token = localStorage.getItem('token'); // null
  if (token) {
    router.navigate(['/home']);
    return false;
  } else {
    return true;
  }
};
