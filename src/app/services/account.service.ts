import {Injectable} from '@angular/core';
import {UserRegisterDto} from "../DTOs/Account/UserRegisterDto";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserLoginDto} from "../DTOs/Account/UserLoginDto";
import {IUserLogin} from "../DTOs/Account/IUserLogin";
import {CurrentUserDto} from "../DTOs/Account/CurrentUserDto";
import {normalizeExtraEntryPoints} from "@angular-devkit/build-angular/src/webpack/utils/helpers";
import {UserProfileDto} from "../DTOs/Account/UserProfileDto";
import {IResponseResult} from "../DTOs/Common/IResponseResult";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http: HttpClient) {
  }

  // @ts-ignore
  private  currentUser : BehaviorSubject<CurrentUserDto> = new BehaviorSubject<CurrentUserDto>(null);


  GetCurentUser() : Observable<CurrentUserDto>{
    return this.currentUser;
  }

  SetCurentUser(user : CurrentUserDto | any) : void{
    this.currentUser.next(user);
  }


  RegisterUser(registerData: UserRegisterDto): Observable<any> {
    return this._http.post<any>("/account/register", registerData);
  }

  LoginUser(loginData: UserLoginDto): Observable<IUserLogin> {
    return this._http.post<IUserLogin>("/account/login", loginData);
  }

  CheckUserAuth() : Observable<any>{
    return this._http.post<any>("/account/checkuserauth", null);
  }

  LogOutUser():Observable<any> {
   return  this._http.post("/account/logout",null);
  }

  ActivateUser(activeCode:string) : Observable<any>
  {
    return this._http.get("/account/activate-account/" + activeCode);
  }

  GetUserProfile() : Observable<IResponseResult<UserProfileDto>>
  {
    return this._http.get<IResponseResult<UserProfileDto>>("/account/get-user-profile");
  }
}
