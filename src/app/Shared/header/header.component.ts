import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CurrentUserDto} from "../../DTOs/Account/CurrentUserDto";
import {AccountService} from "../../services/account.service";
import {CookieService} from "ngx-cookie-service";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  // @ts-ignore
  currentUser : CurrentUserDto = null;

  constructor(private _accountService : AccountService , private _cookieService : CookieService,

  private _orderService : OrderService) { }

  ngOnInit(): void {
    this._accountService.GetCurentUser().subscribe(user=>{
      this.currentUser = user;
    });
  }

  LogOutUser()
  {
    // this._accountService.LogOutUser().subscribe(res=>{
    //   // if (res.status === "Success")
    //   // {
    //   //   console.log("Log Out Success");
    //   // }
    //   console.log(res);
    // });
    this._accountService.SetCurentUser(null);
    this._cookieService.delete('Object13');
    this._orderService._SetOrderDetails([]);
  }

}
