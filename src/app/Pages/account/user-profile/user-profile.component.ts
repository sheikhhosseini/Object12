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
  UserProfileInfo : UserProfileDto = new UserProfileDto('','',0,'','',false,'','',
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
          Email : this.UserProfileInfo.email,
          Address : this.UserProfileInfo.address,
          Age : this.UserProfileInfo.age,
          Bio : this.UserProfileInfo.bio,
          FirstName : this.UserProfileInfo.firstName,
          LastName : this.UserProfileInfo.lastName,
          Gender : this.UserProfileInfo.gender,
          ImageAvatar : this.UserProfileInfo.imageAvatar,
          MobileNumber : this.UserProfileInfo.mobileNumber,
        })
        // this.UserInfoForm.controls.Email.setValue(res.data.lastName);
      }
    });
    this.UserInfoForm = new FormGroup({
      Email: new FormControl(
        null,
        [
          Validators.email,
          Validators.required,
          Validators.maxLength(100)
        ]),

      Address: new FormControl(
        null,
        [
          Validators.maxLength(500)
        ]),

      Age: new FormControl(
        null,
        [
          Validators.pattern("^[0-9]*$"),
          Validators.maxLength(3),
        ]),

      Bio: new FormControl(
        null,
        [
          Validators.maxLength(250)
        ]),

      FirstName: new FormControl(
        null,
        [
          Validators.maxLength(100),
          Validators.required
        ]),

      LastName: new FormControl(
        null,
        [
          Validators.maxLength(150 ),
          Validators.required
        ]),

      Gender: new FormControl(
        null,
        [
          Validators.maxLength(5),
        ]),

      ImageAvatar: new FormControl(
        null,
        [
          Validators.maxLength(170),
        ]),

      MobileNumber: new FormControl(
        null,
        [
          Validators.pattern("^[0-9]*$"),
          Validators.maxLength(11),
        ]),

    });

  }


  SubmitLoginForm(){

  }
}
