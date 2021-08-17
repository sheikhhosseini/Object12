import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {IResponseResult} from "../DTOs/Common/IResponseResult";
import {OrderBasketDto} from "../DTOs/Orders/OrderBasketDto";
import {migrateLegacyGlobalConfig} from "@angular/cli/utilities/config";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // @ts-ignore
  private orderDetails : BehaviorSubject<OrderBasketDto[]> = new BehaviorSubject<OrderBasketDto[]>(null);

  constructor(private _http : HttpClient) { }

  _SetOrderDetails(details : OrderBasketDto[]){
    this.orderDetails.next(details);
  }

  _GetOrderDetails() : Observable<OrderBasketDto[]>{
    return this.orderDetails;
  }

  AddProductToOrder(productId : number , count : number):Observable<IResponseResult<any>>{
    const params = new HttpParams().set('productId', productId.toString()).set('count', count.toString());
    //console.log(params)
    return this._http.get<IResponseResult<any>>('/order/add-order' ,{params});
  }

  GetUserBasketDetails():Observable<IResponseResult<OrderBasketDto[]>>{
    return this._http.get<IResponseResult<OrderBasketDto[]>>('/order/basket-details');
  }
}
