import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { IndexSliderComponent } from './pages/index/index-slider/index-slider.component';
import { IndexHotproductsComponent } from './pages/index/index-hotproducts/index-hotproducts.component';
import { IndexVideosComponent } from './pages/index/index-videos/index-videos.component';
import { IndexNewsComponent } from './pages/index/index-news/index-news.component';
import { IndexSocialComponent } from './pages/index/index-social/index-social.component';
import {SliderService} from "./services/slider.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import {AppRoutingModule} from "./app-routing.module";
import {MyInterceptor} from "./Utilites/MyInterceptor";
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccountService} from "./services/account.service";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import { CookieService } from "ngx-cookie-service";
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import { ProductsComponent } from './Pages/products/products.component';
import {ProductsService} from "./services/products.service";
import { SingleProductComponent } from './Shared/single-product/single-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    IndexSliderComponent,
    IndexHotproductsComponent,
    IndexVideosComponent,
    IndexNewsComponent,
    IndexSocialComponent,
    AboutUsComponent,
    ContactUsComponent,
    RegisterComponent,
    LoginComponent,
    ActivateAccountComponent,
    ProductsComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    SliderService,
    ProductsService,
    AccountService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:MyInterceptor,
      multi:true
    },
    CookieService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
