import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductDto} from "../../DTOs/Products/ProductDto";
import {ProductGalleryImagePath, ProductImagePath} from "../../Utilites/PathTool";
import {ProductGalleryDto} from "../../DTOs/Products/ProductGalleryDto";

declare function OwlCarousel() : any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  // @ts-ignore
  ProductItem : ProductDto = new ProductDto();

  ProductGalleries !: ProductGalleryDto[];
  ProductImagePath = ProductImagePath;
  ProductGalleryImagePath = ProductGalleryImagePath;
  RelatedProducts : ProductDto[] = [];

  constructor(private _productService : ProductsService ,
              private _activatedRoute : ActivatedRoute ,
              private _route : Router) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params=>{
      const productId = params.productId;
      this._productService.GetProductDetail(productId).subscribe(res=>{
        if (res.status === "NotFound"){
          this._route.navigate(['products']);
        }
        this.ProductItem = res.data.product;
        this.ProductGalleries = res.data.galleries;
      })



      this._productService.GetRelatedProducts(productId).subscribe(res=>{
        this.RelatedProducts = res.data;

      });
    })
    setInterval(() =>
    {
      OwlCarousel();
    },100);

  }

}
