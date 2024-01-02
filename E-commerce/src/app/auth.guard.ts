import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ApplicationService } from './application.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private applicationService:ApplicationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     
    if (this.isUserAuthenticated()) {
       // this.router.navigate(['/header']);
        return true;
    } else {
      
      this.router.navigate(['/login']);
      return false;
    }
  }

  private isUserAuthenticated(): boolean {
    return this.applicationService.isLoggedIn;
  }
}
