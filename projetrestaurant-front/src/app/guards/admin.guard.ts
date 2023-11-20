import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// @ts-ignore
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private serviceAPI: ApiService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Vérifiez ici si l'utilisateur est administrateur
    if (this.serviceAPI.isAdmin()) {
      return true;
    } else {
      // Redirigez vers une autre page si l'utilisateur n'est pas administrateur
      this.router.navigate(['/home-page']);
      return false;
    }
  }
}