import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {FilterProductsDto} from "../../DTOs/Products/FilterProductsDto";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductCategoryDto} from "../../DTOs/Products/ProductCategoryDto";
import {ProductOrderBy} from "../../DTOs/Products/ProductOrderBy";

declare function MyPriceSlider() : any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  filterProducts : FilterProductsDto = new FilterProductsDto('',0,0,1,0,0,0,5,
    0,1,null, [],[]);
  pages : number[] = [];
  Categories :ProductCategoryDto[] = [];
  //SelectedCategories : number[] = [];
  CurrentSort : any = null;

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
      if (this.filterProducts.orderBy === null || this.filterProducts.orderBy === undefined){
        this.filterProducts.orderBy = params.orderBy;
      }
      else {
        this.filterProducts.orderBy = this.CurrentSort;
      }
      this.filterProducts.orderBy = params.orderBy;
      //console.log(this.filterProducts.orderBy);
      this.filterProducts.pageId = pageId;
      this.GetProducts();
    });


    this._productsService.GetProductsActiveCategories().subscribe(res=>{
      if (res.status === "Success"){
        this.Categories = res.data;
        //console.log(this.Categories)
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
    let sort : any;
    if (this.CurrentSort == 0) {
      sort = 'PriceAsc';
    }
    else if (this.CurrentSort == 1){
      sort = 'PriceDec';
    }
    this._router.navigate(['products'],{queryParams : {categories : this.filterProducts.categories , orderBy :sort}})
  }

  SetPage(page:number) {
    //console.log(this.CurrentSort)

    let sort : any;
    if (this.CurrentSort == 0) {
      sort = 'PriceAsc';
    }
    else if (this.CurrentSort == 1){
      sort = 'PriceDec';
    }
    this._router.navigate(['products'] , {queryParams : {pageId : page , categories : this.filterProducts.categories , orderBy :sort}})
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


  ChangeOrder(event : any){

    this.filterProducts.orderBy = event.target.value;
    this.CurrentSort = this.filterProducts.orderBy;
    switch (this.filterProducts.orderBy) {
      // @ts-ignore
      case ProductOrderBy.PriceAsc.toString():
        this._router.navigate(['products'],{queryParams : {categories : this.filterProducts.categories , orderBy : 'PriceAsc' , pageId : this.filterProducts.pageId
        }})
        break;
      // @ts-ignore
      case ProductOrderBy.PriceDec.toString():
        this._router.navigate(['products'],{queryParams : {categories : this.filterProducts.categories , orderBy : 'PriceDec' , pageId : this.filterProducts.pageId}})
        break;
    }
  }

}
