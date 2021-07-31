import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserRegisterDto} from "../../DTOs/Account/UserRegisterDto";
import {UserLoginDto} from "../../DTOs/Account/UserLoginDto";
import {AccountService} from "../../services/account.service";
import {CurrentUserDto} from "../../DTOs/Account/CurrentUserDto";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public LoginForm !: FormGroup;

  NewRegisterStatus : boolean = false;
  UsernameText : string = '';
  constructor(private _route : ActivatedRoute , private _loginService : AccountService)
  {
    this._route.queryParams.subscribe(params => {
      this.UsernameText = params['UsernameText'];
      this.NewRegisterStatus = params['NewRegisterStatus'];
    });
  }

  form: FormGroup = new FormGroup({});


  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      Email: new FormControl(
        null,
        [
          Validators.email,
          Validators.maxLength(100),
          Validators.required
        ]
      ),
      Password: new FormControl(null,
        [
          Validators.maxLength(15),
          Validators.minLength(4),
          Validators.required
        ]),
    });
  }

  SubmitLoginForm()
  {
    if (this.LoginForm.valid){
      const LoginData = new UserLoginDto(
        this.LoginForm.controls.Email.value,
        this.LoginForm.controls.Password.value);
        this._loginService.LoginUser(LoginData).subscribe(response =>{
        const currentUser = new CurrentUserDto(
          response.data.firstName,
          response.data.userId);
        this._loginService.SetCurentUser(currentUser);
        this._loginService.GetCurentUser().subscribe(user=>{
          console.log(user);
        });
    });
  }
}
}
