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
    0,1,[],[]);
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

      this.filterProducts.categories = params.categories ? params.categories : [];
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
    if (this.filterProducts.categories === undefined || this.filterProducts.categories === null){
      this.filterProducts.categories = [];
    }

    const val = event.target.value;
    if (event.target.checked){
      this.filterProducts.categories.push(parseInt(val));
      this.SetCategoriesFilter();
    }
    else if (!event.target.checked){
      this.filterProducts.categories = this.filterProducts.categories.filter(c=> c !== parseInt(val));
      //this.filterProducts.categories.splice(this.filterProducts.categories.indexOf(parseInt(val)),1);
      this.SetCategoriesFilter();
    }
  }

  SetCategoriesFilter() {
    this._router.navigate(['products'],{queryParams : {categories : this.filterProducts.categories}})
  }

  SetPage(page:number) {
    this._router.navigate(['products'] , {queryParams : {pageId : page , categories : this.filterProducts.categories}})
  }

  GetProducts() {
    this._productsService.GetFilteredProducts(this.filterProducts).subscribe(res=> {
      this.filterProducts = res.data;
      this.pages = [];
      if (res.data.categories === null){
        this.filterProducts.categories = [];
      }
      for (let i = this.filterProducts.startPage; i<= this.filterProducts.endPage; i++){
        this.pages.push(i);
      }
    });
  }

}
