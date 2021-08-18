import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {AccountService} from "../services/account.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserLoginRegisterStatusGuard implements CanActivate {
  constructor(private _accountService : AccountService  ,
              private _router : Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree>  {

    return this._accountService.CheckUserAuth().pipe(map(res => {
      if(res.status === "Success"){
        return this._router.createUrlTree(['/']);
      }
      return true;
    }));
  }
}
