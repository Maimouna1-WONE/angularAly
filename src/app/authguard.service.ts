import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate, CanActivateChild{

  constructor(private authservice: AuthService, private router: Router) { }

  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
    return this.authservice.isAuthenticated().then(
      (authenticated: boolean) => {
        if (authenticated){
          return true;
        }
        else {
          this.router.navigate(['/login']);
          return false;
        }
      }
    );
  }

  // tslint:disable-next-line:max-line-length
  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean{
    return this.canActivate(childRoute, state);
  }
}
