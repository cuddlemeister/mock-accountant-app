import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private hs: HelperService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.hs.loggedIn) {
      this.hs.openSnackBar('Не произведен вход в систему');
      this.router.navigate(['/login']);
    }
    return this.hs.loggedIn;
  }
}
