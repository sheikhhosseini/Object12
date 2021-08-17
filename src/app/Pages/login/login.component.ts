import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserRegisterDto} from "../../DTOs/Account/UserRegisterDto";
import {UserLoginDto} from "../../DTOs/Account/UserLoginDto";
import {AccountService} from "../../services/account.service";
import {CurrentUserDto} from "../../DTOs/Account/CurrentUserDto";
import {CookieService} from "ngx-cookie-service";
import {SwalComponent} from "@sweetalert2/ngx-sweetalert2";
import {OrderService} from "../../services/order.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('WrongData') public readonly WrongData!: SwalComponent;
  @ViewChild('NotActivated') public readonly NotActivated!: SwalComponent;
  @ViewChild('SuccessSwal') public readonly SuccessSwal!: SwalComponent;
  public LoginForm !: FormGroup;

  ActivatedAccount: boolean = false;
  NewRegisterStatus: boolean = false;
  UsernameText: string = '';

  constructor(private _route: ActivatedRoute, private _accountService: AccountService,private _router : Router,
              private _cookie: CookieService,private _orderService : OrderService) {
    this._route.queryParams.subscribe(params => {
      this.UsernameText = params['UsernameText'];
      this.NewRegisterStatus = params['NewRegisterStatus'];
      this.ActivatedAccount = params['activatedAccount'];
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
      RememberMe: new FormControl(null,
        [
          Validators.maxLength(5),
        ]),
    });
  }

  SubmitLoginForm() {
    if (this.LoginForm.valid) {
      const LoginData = new UserLoginDto(
        this.LoginForm.controls.Email.value,
        this.LoginForm.controls.Password.value,
        this.LoginForm.controls.RememberMe.value == null ? "false" :  this.LoginForm.controls.RememberMe.value.toString());
      // console.log(LoginData);
      this._accountService.LoginUser(LoginData).subscribe(response => {
        if (response.status === "Success") {
          const currentUser = new CurrentUserDto(
            response.data.firstName,
            response.data.userId);
          this._accountService.SetCurentUser(currentUser);
          // var twentyMinutesLater = new Date();
          // twentyMinutesLater.setMinutes(twentyMinutesLater.getMinutes() + 1);
          // console.log(twentyMinutesLater);
          this._accountService.GetCurentUser().subscribe(user => {
            this._cookie.set('Object13', response.data.token, response.data.expireTime, "", "", true);
            this._orderService.GetUserBasketDetails().subscribe(res=>{
              if (res.status === "Success"){
                this._orderService._SetOrderDetails(res.data);
              }
            })
          });
          this._router.navigate(['/']);
        }
        if (response.status === "NotFound") {
          this.LoginForm.reset();
          this.WrongData.fire();
        }
        if (response.status === "UserNotActivated") {
          this.LoginForm.reset();
          this.NotActivated.fire();
        }
      });
    }
  }
}
