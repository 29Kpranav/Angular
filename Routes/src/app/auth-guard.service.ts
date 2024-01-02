import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree 
         
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,      //represents the route about to be activated.
    state: RouterStateSnapshot          //represents the router state at the time of activation i.e. URl, route-query parameters, router data, navigation history
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = this.authService.isAuthentiction();

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}

/*

Authentication:
Authentication is the process of verifying and validating the identity of a user. It ensures that the user is who they claim 
to be before granting access to certain resources or functionalities.
In web applications, authentication is often implemented through login mechanisms (like username/password, social logins, or 
multi-factor authentication), where users provide their credentials to gain access.
Successful authentication usually results in the creation of a session or token that represents the authenticated user, allowing
access to protected resources or routes.

AuthGuard:
An AuthGuard is a type of route guard used in Angular applications to control access to certain routes based on certain conditions
or authentication status.
It's a part of the Angular router's functionality and is used to protect specific routes by checking certain criteria before 
allowing navigation to those routes.
Typically, an AuthGuard checks if a user is authenticated before allowing access to a particular route. If the user is 
authenticated, navigation proceeds; otherwise, the guard redirects the user to another route, such as a login page.

*/


