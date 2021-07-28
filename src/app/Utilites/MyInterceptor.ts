import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyDomainName} from "./PathTool";

export class MyInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //let myRequest : HttpRequest<any> = req;
    const myRequest = req.clone({
      url:MyDomainName + req.url
    });
    return next.handle(myRequest);
  }
}
