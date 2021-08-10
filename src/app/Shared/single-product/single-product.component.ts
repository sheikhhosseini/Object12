import {Component, Input, OnInit} from '@angular/core';
import {ProductDto} from "../../DTOs/Products/ProductDto";
import {ProductImagePath} from "../../Utilites/PathTool";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {


  @Input() product : ProductDto = new ProductDto(1,new Date(),'',0,''
  ,'','',false,false);
  ProductImage = ProductImagePath;
  ProductName : string = '';
  constructor() {
  }

  ngOnInit(): void {
    this.ProductName = this.product.productName.replace(/\s/g , '_')
  }

}
