import { inject } from '@angular/core';
import { CanActivateFn,Router,ActivatedRouteSnapshot,RouterStateSnapshot, Route } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserauthService } from '../services/userauth.service';

export const AuthGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  
  const router:Router = inject(Router)
  const authService = inject(UserauthService)
  return authService.getUserProfile().pipe(
    map(userObject => {
      if (userObject && userObject.id) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    })
  );
};
