import {Component, OnInit} from '@angular/core';
import {SliderService} from "../../../services/slider.service";
import {Slider} from "../../../DTOs/Slider/Slider";
import {MyDomainName} from "../../../Utilites/PathTool";

declare function OwlCarousel() : any;

@Component({
  selector: 'app-index-slider',
  templateUrl: './index-slider.component.html',
  styleUrls: ['./index-slider.component.css']
})
export class IndexSliderComponent implements OnInit {

  constructor(private _sliderService: SliderService) {
  }

  public sliders : Slider[] = [];
  public myDomain :string = MyDomainName;

  ngOnInit(): void {
    this._sliderService.GetCurrentSliders().subscribe(s => {
      if (s === null) {
        this._sliderService.GetSliders().subscribe(res => {
          if (res.status === "Success") {
            this._sliderService.SetCurrentSliders(res.data);
          }
        });
      } else {
        this.sliders = s;
        setInterval(() =>
        {
          OwlCarousel();
        },100);
      }
    });
  }
}
