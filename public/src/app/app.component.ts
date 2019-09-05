import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'public';

  public currentPage: string;
  public showWeddingDropdown: boolean = false;
  public showCoupleDropdown: boolean = false;

  public collapse: boolean = true;

  constructor(private router:Router) {
    this.router.events.subscribe(event => { 
      if (event.constructor.name === "NavigationStart" || event.constructor.name === "ActivationEnd" ) {
        this.collapse = true;
        this.currentPage = this.router.url;
      }
    });
  }

  ngOnInit() {
    console.log("INIT");
    this.currentPage = this.router.url;
  }
}
