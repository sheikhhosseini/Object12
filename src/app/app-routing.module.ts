import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {LoginComponent} from "./Pages/login/login.component";
import {RegisterComponent} from "./Pages/register/register.component";
import {ActivateAccountComponent} from "./pages/activate-account/activate-account.component";
import {ProductsComponent} from "./Pages/products/products.component";
import {ProductDetailsComponent} from "./Pages/product-details/product-details.component";
import {NotfoundComponent} from "./Pages/notfound/notfound.component";
import {UserAuthGuardGuard} from "./myguards/user-auth-guard.guard";
import {UserLoginRegisterStatusGuard} from "./myguards/user-login-register-status.guard";

const routes: Routes =
  [
    {path : '' , component : IndexComponent},
    {path : 'about-us' , component : AboutUsComponent},
    {path : 'contact-us' , component : ContactUsComponent , canActivate : [UserAuthGuardGuard]},
    {path : 'login' , component : LoginComponent,canActivate : [UserLoginRegisterStatusGuard]},
    {path : 'register' , component : RegisterComponent,canActivate : [UserLoginRegisterStatusGuard]},
    {path : 'products' , component : ProductsComponent},
    {path : 'activate-account/:activeCode' , component : ActivateAccountComponent},
    {path : 'products/:productId/:productName' , component : ProductDetailsComponent},
    {path : '**' , component : NotfoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
