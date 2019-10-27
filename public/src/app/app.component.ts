import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'public';

  public currentPage: string;
  public showWeddingDropdown: boolean;
  public showPortraitDropdown: boolean;
  public collapse: boolean;

  constructor(private router:Router) {
    this.showWeddingDropdown = false;
    this.showPortraitDropdown = false;
    this.collapse = true;
    this.router.events.subscribe(event => { 
      if (event instanceof NavigationEnd) {
        this.collapse = true;
        this.currentPage = this.router.url;
      }
    });
  }

  ngOnInit() {
    this.currentPage = this.router.url;
  }
}
