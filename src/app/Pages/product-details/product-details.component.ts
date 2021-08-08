import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductDto} from "../../DTOs/Products/ProductDto";
import {ProductImagePath} from "../../Utilites/PathTool";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  ProductItem !: ProductDto;
  ProductImage = ProductImagePath;

  constructor(private _productService : ProductsService ,
              private _activatedRoute : ActivatedRoute ,
              private _route : Router) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params=>{
      const productId = params.productId;
      // if (productId === undefined){
      //   this._route.navigate(['products']);
      // }
      this._productService.GetProductDetail(productId).subscribe(res=>{
        if (res.status === "NotFound"){
          this._route.navigate(['products']);
        }
        this.ProductItem = res.data;
      })
    })
    //this._productService.GetProductDetail()
  }

}
