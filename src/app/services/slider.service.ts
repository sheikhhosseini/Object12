import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {HomeSliderResponse} from "../DTOs/Slider/HomeSliderResponse";
import {Slider} from "../DTOs/Slider/Slider";

@Injectable({
  providedIn: 'root'
})
export class SliderService
{
  constructor(private _http:HttpClient)
  {

  }

  // @ts-ignore
  private HomeSliders: BehaviorSubject<Slider[]> = new BehaviorSubject<Slider[]>(null);

  public GetSliders() : Observable<HomeSliderResponse>
  {
    return  this._http.get<HomeSliderResponse>("https://localhost:44345/slider/GetActiveSlider");
  }

  public GetCurrentSliders():Observable<Slider[]>
  {
    return this.HomeSliders;
  }
  public SetCurrentSliders(slider : Slider[])
  {
    this.HomeSliders.next(slider);
  }
}
