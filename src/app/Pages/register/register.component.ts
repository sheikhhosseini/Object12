import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {assertNotNull} from "@angular/compiler/src/output/output_ast";
import {UserRegisterDto} from "../../DTOs/Account/UserRegisterDto";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public regitserForm !: FormGroup;

  constructor(private _accountService : AccountService) {

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
    // const registerData = new UserRegisterDto(
    //   this.regitserForm.controls.Email.value,
    //   this.regitserForm.controls.Password.value,
    //   this.regitserForm.controls.ConfirmPassword.value,
    //   this.regitserForm.controls.FirstName.value,
    //   this.regitserForm.controls.LastName.value,
    //   this.regitserForm.controls.MobileNumber.value,
    //   this.regitserForm.controls.Gender.value);
    //
    // console.log(registerData);
    // this._accountService.RegisterUser(registerData).subscribe(response =>{
    //   console.log(response);
    //   if (response.status === "Success") {
    //     this.regitserForm.reset();
    //   }
    // });

  }
}
