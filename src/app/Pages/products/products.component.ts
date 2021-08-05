import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {FilterProductsDto} from "../../DTOs/Products/FilterProductsDto";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductCategoryDto} from "../../DTOs/Products/ProductCategoryDto";

declare function MyPriceSlider() : any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  filterProducts : FilterProductsDto = new FilterProductsDto('',0,0,1,0,0,0,5,
    0,1,[]);
  pages : number[] = [];
  Categories :ProductCategoryDto[] = [];
  SelectedCategories : number[] = [];

  constructor(private _productsService : ProductsService
              , private _activatedRoute : ActivatedRoute
              , private _router : Router) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      let pageId = 1;
      if (params.pageId !== undefined){
        pageId = parseInt(params.pageId , 0);
      }
      //console.log(pageId);
      this.filterProducts.pageId = pageId;
      this.GetProducts();
    });


    this._productsService.GetProductsActiveCategories().subscribe(res=>{
      if (res.status === "Success"){
        this.Categories = res.data;
        console.log(this.Categories)
      }
    });

    MyPriceSlider();

  }

  FilterChangeCategory(event : any)
  {

    let val = event.target.value;
    if (event.target.checked){
      this.SelectedCategories.push(parseInt(val));
      console.log(this.SelectedCategories);
    }
    else if (!event.target.checked){
      //console.log(this.SelectedCategories.indexOf(parseInt(val)))
      this.SelectedCategories.splice(this.SelectedCategories.indexOf(parseInt(val)),1);
      console.log(this.SelectedCategories);
    }
  }


  SetPage(page:number) {
    this._router.navigate(['products'] , {queryParams : {pageId : page}})
  }

  GetProducts() {
    this._productsService.GetFilteredProducts(this.filterProducts).subscribe(res=> {
      this.filterProducts = res.data;
      this.pages = [];
      for (let i = this.filterProducts.startPage; i<= this.filterProducts.endPage; i++){
        this.pages.push(i);
      }
    });
  }

}
