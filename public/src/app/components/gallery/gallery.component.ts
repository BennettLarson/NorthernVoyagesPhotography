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
  // public cover_image: string;
  public _images: string[];
  public text_col1: string;
  public text_col2: string;
  public text_col3: string;
  
  constructor(private router:Router) { 
   }

  ngOnInit() {
    this.constants = new Constants();
    console.log('ON INIT');
    this.currentPage = this.router.url;
    console.log('CURRENT PAGE: ' + this.currentPage);
    if (this.currentPage === '/wedding') {
      // this.cover_image = this.constants.w_cover_image;
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
