import { Component, OnInit } from '@angular/core';

declare function Mymenu() : any;
declare function Mymenu2() : any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() =>
    {
      Mymenu();
      Mymenu2();
    },100);
  }

}
