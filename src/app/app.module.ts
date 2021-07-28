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
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SliderService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:MyInterceptor,
      multi:true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
