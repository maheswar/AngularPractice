import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { UserService } from '../usercreate/userservice';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService, private authService: AuthService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
        import('@angular/router').UrlTree |
        import('rxjs').Observable<boolean | import('@angular/router').UrlTree> | Promise<boolean |
            import('@angular/router').UrlTree> {
        // return this.userService.logInSub.pipe(map(user => {
        //     if (!!user) {
        //         return true;
        //     }
        //     return this.router.createUrlTree(['/login']);
        // }));
        if (!!this.authService.loginKey && this.authService.loginKey !== '') {
            return true;
        }
        return this.router.createUrlTree(['/login']);
    }
}
