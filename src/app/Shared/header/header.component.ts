import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CurrentUserDto} from "../../DTOs/Account/CurrentUserDto";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  // @ts-ignore
  currentUser : CurrentUserDto = null;

  constructor(private _accountService : AccountService) { }

  ngOnInit(): void {
    this._accountService.GetCurentUser().subscribe(user=>{
      this.currentUser = user;
    });
  }


}
