import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'public';

  public currentPage: string;

  constructor(private router:Router, private nav:AppService) {}

  ngOnInit() {
    // this.nav.show();
  }

  ngDoCheck() {
    this.currentPage = this.router.url;
  }
  public pageSelected(page) {
    this.currentPage = page;
  }
}
