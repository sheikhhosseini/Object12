import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {
  Validation = false;
  constructor(private _activeRoute: ActivatedRoute , private _accountService: AccountService,
              private _route :Router) { }

  ngOnInit(): void {
    this._accountService.ActivateUser(this._activeRoute.snapshot.params.activeCode).subscribe(res => {
      if (res.status === "Success")
      {
        this.Validation = true;
        this._route.navigate(['/login'] , {queryParams : {activatedAccount : true}});
      }
    });
     //console.log(this._activeRoute.snapshot.params.activeCode);
  }

}
