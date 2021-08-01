import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyDomainName} from "./PathTool";
import {AccountService} from "../services/account.service";
import {CookieService} from "ngx-cookie-service";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class MyInterceptor implements HttpInterceptor{

  constructor(private _cookieService : CookieService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._cookieService.get("Object13");

    const myRequest = req.clone({
      url:MyDomainName + req.url,
      headers : req.headers.append('Authorization' , 'Bearer ' + token)
    });
    return next.handle(myRequest);
  }
}
