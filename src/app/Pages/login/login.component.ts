import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  NewRegisterStatus : boolean = false;
  UsernameText : string = '';
  constructor(private _route : ActivatedRoute)
  {
    this._route.queryParams.subscribe(params => {
      this.UsernameText = params['UsernameText'];
      this.NewRegisterStatus = params['NewRegisterStatus'];
    });
  }

  ngOnInit(): void {
  }

}
