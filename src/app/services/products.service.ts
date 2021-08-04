import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilterProductsDto} from "../DTOs/Products/FilterProductsDto";
import {IResponseResult} from "../DTOs/Common/IResponseResult";



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http : HttpClient) { }

  GetFilteredProducts() : Observable<IResponseResult<FilterProductsDto>>
  {
    return this._http.get<IResponseResult<FilterProductsDto>>('/products/getproducts');
  }
}
