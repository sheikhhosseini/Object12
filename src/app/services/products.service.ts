import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilterProductsDto} from "../DTOs/Products/FilterProductsDto";
import {IResponseResult} from "../DTOs/Common/IResponseResult";
import {ProductCategoryDto} from "../DTOs/Products/ProductCategoryDto";
import {ProductOrderBy} from "../DTOs/Products/ProductOrderBy";
import {ProductDto} from "../DTOs/Products/ProductDto";
import {ProductDetailDto} from "../DTOs/Products/ProductDetailDto";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http : HttpClient) { }

  GetFilteredProducts(filter : FilterProductsDto) : Observable<IResponseResult<FilterProductsDto>>
  {
    let myParams;
    if (filter !== null){
      if (filter.title === null){
        filter.title = '';
      }
      myParams = new HttpParams()
        .set('pageId' , filter.pageId.toString())
        .set('title' , filter.title)
        .set('startPrice' , filter.startPrice)
        .set('endPrice' , filter.endPrice)
        .set('takeEntity' , filter.takeEntity)

      for (const cat of filter.categories){
        myParams = myParams.append('categories' , cat.toString());
      }

      if (filter.orderBy !== null && filter.orderBy !== undefined && filter.orderBy)
      {
        myParams = myParams = myParams.append('orderBy' , filter.orderBy.toString());
      }

    }
    return this._http.get<IResponseResult<FilterProductsDto>>('/products/getproducts' , {params : myParams});
  }



  GetProductsActiveCategories() : Observable<IResponseResult<ProductCategoryDto[]>>
  {
    return this._http.get<IResponseResult<ProductCategoryDto[]>>('/products/products-categories');
  }


  GetProductDetail(productId : number) : Observable<IResponseResult<ProductDetailDto>>{
    return this._http.get<IResponseResult<ProductDetailDto>>('/products/products-detail/' + productId);
  }


}
