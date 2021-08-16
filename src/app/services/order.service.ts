import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponseResult} from "../DTOs/Common/IResponseResult";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http : HttpClient) { }


  AddProductToOrder(productId : number , count : number):Observable<IResponseResult<any>>{
    const params = new HttpParams().set('productId', productId.toString()).set('count', count.toString());
    //console.log(params)
    return this._http.get<IResponseResult<any>>('/order/add-order' ,{params});
  }
}
