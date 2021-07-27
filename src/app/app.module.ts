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
import {HttpClientModule} from "@angular/common/http";

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
    IndexSocialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
