import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {LoginComponent} from "./Pages/login/login.component";
import {RegisterComponent} from "./Pages/register/register.component";
import {ActivateAccountComponent} from "./pages/activate-account/activate-account.component";

const routes: Routes =
  [
    {path : '' , component : IndexComponent},
    {path : 'about-us' , component : AboutUsComponent},
    {path : 'contact-us' , component : ContactUsComponent},
    {path : 'login' , component : LoginComponent},
    {path : 'register' , component : RegisterComponent},
    {path : 'activate-account/:activeCode' , component : ActivateAccountComponent}
    // {path : '**' , component : NotfoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
