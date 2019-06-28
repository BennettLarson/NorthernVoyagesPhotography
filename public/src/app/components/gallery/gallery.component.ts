import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../constants';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private constants: Constants;
  public currentPage: string;
  public _images: string[];
  public text_col1: string;
  public text_col2: string;
  public text_col3: string;
  
  constructor(private router:Router) { 
   }

  ngOnInit() {
    this.constants = new Constants();
    this.currentPage = this.router.url;
    if (this.currentPage === '/wedding') {
      this._images = this.constants.w_images;
      this.text_col1 = this.constants.w_text_col1;
      this.text_col2 = this.constants.w_text_col2;
      this.text_col3 = this.constants.w_text_col3;
    } else if (this.currentPage === '/couple') {
      this._images = this.constants.c_images;
      this.text_col1 = this.constants.c_text_col1;
      this.text_col2 = this.constants.c_text_col2;
      this.text_col3 = this.constants.c_text_col3;
    }
  }
}
