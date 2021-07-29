import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {assertNotNull} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public regitserForm !: FormGroup;

  constructor() {

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
    console.log(this.regitserForm);
  }


}
