import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../../services/account.service";
import {UserProfileDto} from "../../../DTOs/Account/UserProfileDto";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  panelOpenState = false;
  UserProfileInfo : UserProfileDto = new UserProfileDto('',0,'','','',false,'','',
    '');

  // @ts-ignore
  UserInfoForm !: FormGroup = null;

  constructor(private _userService : AccountService) {

  }


  ngOnInit(): void {

    this._userService.GetUserProfile().subscribe(res=>{
      if (res.status === "Success"){
        this.UserProfileInfo = res.data;

        this.UserInfoForm.patchValue({
          Email : this.UserProfileInfo.firstName,
          Password : this.UserProfileInfo.lastName,
        })
        // this.UserInfoForm.controls.Email.setValue(res.data.lastName);
      }
    });
    this.UserInfoForm = new FormGroup({
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

          Validators.required
        ]),
      RememberMe: new FormControl(null,
        [
          Validators.maxLength(5),
        ]),
    });

  }


  SubmitLoginForm(){

  }
}
