import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AccountService} from "../services/account.service";
import {map, take, tap} from "rxjs/operators";
import {ifError} from "assert";
import {CurrentUserDto} from "../DTOs/Account/CurrentUserDto";

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardGuard implements CanActivate {

  constructor(private _accountService : AccountService  ,
              private _router : Router) {
  }

  status : boolean = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree>  {

    return this._accountService.CheckUserAuth().pipe(map(res => {
      if(res.status !== "Success"){
        return this._router.createUrlTree(['/login']);
      }
      return true;
    }));
  }
}
