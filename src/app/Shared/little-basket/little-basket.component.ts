import { Component, OnInit } from '@angular/core';
import {OrderBasketDto} from "../../DTOs/Orders/OrderBasketDto";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-little-basket',
  templateUrl: './little-basket.component.html',
  styleUrls: ['./little-basket.component.css']
})
export class LittleBasketComponent implements OnInit {

  details : OrderBasketDto[] = [];
  totalCost : number = 0;

  constructor(private _orderService : OrderService) { }

  ngOnInit(): void {
    this._orderService._GetOrderDetails().subscribe(res => {
      this.details = res;
      this.CalculateTotalPrice();
    })
  }

  CalculateTotalPrice(){
    this.totalCost = 0;
    if (this.details !== null) {
      for (let i = 0; i < this.details.length; i++) {
        this.totalCost += this.details[i].price * this.details[i].count;
      }
    }
  }

  RemoveOrderDetail(id : number){
      this._orderService.RemoveOrderDetail(id).subscribe(res=>{
        this.details = res.data;
        this.CalculateTotalPrice();
      })
  }

}
