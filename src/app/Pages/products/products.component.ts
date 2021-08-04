import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {FilterProductsDto} from "../../DTOs/Products/FilterProductsDto";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  filterProducts : FilterProductsDto | null = null;

  constructor(private _productsService : ProductsService) { }

  ngOnInit(): void {

    this._productsService.GetFilteredProducts().subscribe(res=>
    {
      console.log(res);
      this.filterProducts = res.data;
    });
  }

}
