import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const requiredRole = route.data['role'];

  // Check if the user is authenticated
  if (!authService.isAuthenticated()) {
    router.navigate(['/home']);
    return false;
  }

  // Check if the user has the required role
  if (authService.currentUserRole !== requiredRole) {
    router.navigate(['/unauthorized']);
    return false;
  }

  // If both checks pass, allow access
  return true;
};
