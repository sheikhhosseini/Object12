import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductDto} from "../../DTOs/Products/ProductDto";
import {ProductGalleryImagePath, ProductImagePath} from "../../Utilites/PathTool";
import {ProductGalleryDto} from "../../DTOs/Products/ProductGalleryDto";
import {ProductCommentDto} from "../../DTOs/Products/ProductCommentDto";
import {CurrentUserDto} from "../../DTOs/Account/CurrentUserDto";
import {AccountService} from "../../services/account.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddProductComment} from "../../DTOs/Products/AddProductComment";
import {log} from "util";

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
  ProductComments : ProductCommentDto[] = [];
  // @ts-ignore
  CurrentUser : CurrentUserDto = null;

  // @ts-ignore
  CommentForm : FormGroup;

  constructor(private _productService : ProductsService ,
              private _activatedRoute : ActivatedRoute ,
              private _route : Router,
              private  _accountService : AccountService) { }

  ngOnInit(): void {

    this._accountService.GetCurentUser().subscribe(res=>{
      if (res !== null){
        this.CurrentUser = res;
      }
    })

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

      this._productService.GetProductComments(productId).subscribe(res=>{
        this.ProductComments = res.data;
        //console.log(this.ProductComments)
      });
    })

    setInterval(() =>
    {
      OwlCarousel();
    },100);

    this.CommentForm = new FormGroup({
      commentText : new FormControl(null ,[
        Validators.required,
        Validators.maxLength(150)
      ])
    })

  }



  AddComment(){
    //console.log(this.CommentForm)
    const  comment = new AddProductComment(this.CommentForm.controls.commentText.value,this.ProductItem.id);
    this._productService.AddProductComment(comment).subscribe(res=>{
      if (res.status === "Success"){
        const commentDto = res.data;
        commentDto.userFullName =  this.CurrentUser.fristName;
        this.ProductComments.unshift(commentDto);
         //console.log(res.data)
        this.CommentForm.reset();
      }
    })
  }
}
