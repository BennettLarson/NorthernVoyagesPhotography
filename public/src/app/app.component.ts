import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'public';

  public currentPage: string;

  @ViewChild('test') private test: any;
  constructor(private router:Router) {}

  ngOnInit() {
  }

  ngDoCheck() {
    this.currentPage = this.router.url;
  }
  public pageSelected(page) {
    this.currentPage = page;
  }
}
