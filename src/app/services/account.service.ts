import { Injectable } from '@angular/core';
import {UserRegisterDto} from "../DTOs/Account/UserRegisterDto";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http : HttpClient) { }


   RegisterUser(registerData : UserRegisterDto):Observable<any>
   {
     return this._http.post<any>("/account/register" , registerData);
   }
}
