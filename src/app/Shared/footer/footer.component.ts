import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    setInterval(() =>
    {
      if($(".footer-reveal").length > 0) {
        var height = $(".footer").innerHeight();
        $("#main").css("margin-bottom", height);
      }
    },100);
  }

}
