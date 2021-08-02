import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  constructor(private _activeRoute: ActivatedRoute , private _accountService: AccountService) { }

  ngOnInit(): void {
    this._accountService.ActivateUser(this._activeRoute.snapshot.params.activeCode).subscribe(res => {
      console.log(res);
    });
     //console.log(this._activeRoute.snapshot.params.activeCode);
  }

}
