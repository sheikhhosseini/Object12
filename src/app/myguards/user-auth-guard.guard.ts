import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AccountService} from "../services/account.service";

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardGuard implements CanActivate {

  constructor(private _acoountService : AccountService  ,
              private _router : Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this._acoountService.IsAuthenticated().then(res=>{
      if (res){
        return true;
      }
      else {
        this._router.navigate(['login']);
      }
      return false;
    });
  }

}
