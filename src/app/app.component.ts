import {Component, OnInit} from '@angular/core';
import {AccountService} from "./services/account.service";
import {CurrentUserDto} from "./DTOs/Account/CurrentUserDto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Front-Project';

  constructor(private _accountService : AccountService ) {
  }

  ngOnInit():void {
    this._accountService.CheckUserAuth().subscribe(res=>{
      if (res.status === "Success") {
          const user = new CurrentUserDto(
            res.data.firstName,
            res.data.userId
          )
        this._accountService.SetCurentUser(user);
      }
      //console.log(res);
    });
  }
}
