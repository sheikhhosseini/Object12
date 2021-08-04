import {Component, Input, OnInit} from '@angular/core';
import {ProductDto} from "../../DTOs/Products/ProductDto";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() product !: ProductDto;


  constructor() { }

  ngOnInit(): void {
  }

}
