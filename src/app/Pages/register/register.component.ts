import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {assertNotNull} from "@angular/compiler/src/output/output_ast";
import {UserRegisterDto} from "../../DTOs/Account/UserRegisterDto";
import {AccountService} from "../../services/account.service";
import {SwalComponent} from "@sweetalert2/ngx-sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public regitserForm !: FormGroup;

  @ViewChild('EmailExistSwal') public readonly EmailExistSwal!: SwalComponent;
  @ViewChild('SuccessSwal') public readonly SuccessSwal!: SwalComponent;
  constructor(private _accountService : AccountService ,
              private _route : Router) {
  }

  ngOnInit(): void {
    this.regitserForm = new FormGroup({
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
      ConfirmPassword: new FormControl(null,
        [
          Validators.maxLength(15),
          Validators.minLength(4),
          Validators.required
        ]),
      FirstName: new FormControl(null,
        [
          Validators.maxLength(100),
          Validators.required
        ]),
      LastName: new FormControl(null,
        [
          Validators.maxLength(150),
          Validators.required
        ]),
      MobileNumber: new FormControl(null,
        [
          Validators.maxLength(11),
          Validators.minLength(11),
          Validators.pattern("^[0-9]*$"),
          Validators.required
        ]),
      Gender: new FormControl(null,
        [
          Validators.maxLength(15),
          Validators.required
        ]),
    });
  }

  SubmitRegisterForm() {

    console.log(this.regitserForm);
    const registerData = new UserRegisterDto(
      this.regitserForm.controls.Email.value,
      this.regitserForm.controls.Password.value,
      this.regitserForm.controls.ConfirmPassword.value,
      this.regitserForm.controls.FirstName.value,
      this.regitserForm.controls.LastName.value,
      this.regitserForm.controls.MobileNumber.value,
      this.regitserForm.controls.Gender.value);

    //console.log(registerData);
    this._accountService.RegisterUser(registerData).subscribe(response =>{
      console.log(response);
      if (response.status === "Success") {
        this.regitserForm.reset();
        this.SuccessSwal.fire();
        this._route.navigate(['/login'] , {queryParams : {NewRegisterStatus : true , UsernameText : registerData.Email}});
      }
      if (response.data === "EmailExist") {
        this.regitserForm.controls.Email.reset();
        let email = document.getElementById('email');
        // @ts-ignore
        email.classList.add('EmailExist');
        this.EmailExistSwal.fire();
      }
    });

  }
}
