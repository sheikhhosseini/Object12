import { Component, OnInit } from '@angular/core';
import {map, publish} from "rxjs/operators";
import {OrderService} from "../../services/order.service";
import {OrderBasketDto} from "../../DTOs/Orders/OrderBasketDto";

@Component({
  selector: 'app-header-basket',
  templateUrl: './header-basket.component.html',
  styleUrls: ['./header-basket.component.css']
})
export class HeaderBasketComponent implements OnInit {
  details : OrderBasketDto[] = [];
  totalCost : number = 0;

  constructor(private _orderService : OrderService) { }

  ngOnInit(): void {
    this._orderService._GetOrderDetails().subscribe(res=>{
      this.details = res;
      if (this.details !== null){
        for (let i = 0 ; i<this.details.length;i++){
          this.totalCost += this.details[i].price * this.details[i].count;
        }
      }



    })

  }

}
