import { Inject, inject } from '@angular/core';
import { CanActivateFn,Router,ActivatedRouteSnapshot,RouterStateSnapshot, Route } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserauthService } from '../services/userauth.service';
import { SnackbarService } from '../services/snackbar.service';

export const AuthGuard: CanActivateFn = () => {
  
  const authService = inject(UserauthService)
  const snackbarService = inject(SnackbarService)

  return authService.getUserProfile().pipe(
    map(userObject => {
      if (userObject && userObject.id) {
        return true;
      } else {
        snackbarService.showSnackbarBottom('Login to save the articles', 'top', 'right');
        return false;
      }
    })    
  );
};
