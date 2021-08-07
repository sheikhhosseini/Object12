import {Component, Input, OnInit} from '@angular/core';
import {ProductDto} from "../../DTOs/Products/ProductDto";
import {ProductImagePath} from "../../Utilites/PathTool";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() product !: ProductDto;
  ProductImage = ProductImagePath;

  constructor() { }

  ngOnInit(): void {
  }

}
