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
          Validators.required
        ]
      ),
      Password: new FormControl(),
      ConfirmPassword: new FormControl(),
      FirstName: new FormControl(),
      LastName: new FormControl(),
      MobileNumber: new FormControl(),
      Gender: new FormControl(),
    });
  }

  SubmitRegisterForm() {
    const registerData = new UserRegisterDto(
      this.regitserForm.controls.Email.value,
      this.regitserForm.controls.Password.value,
      this.regitserForm.controls.ConfirmPassword.value,
      this.regitserForm.controls.FirstName.value,
      this.regitserForm.controls.LastName.value,
      this.regitserForm.controls.MobileNumber.value,
      this.regitserForm.controls.Gender.value);

    console.log(registerData);
    this._accountService.RegisterUser(registerData).subscribe(response =>{
      console.log(response);
    });

  }
}
