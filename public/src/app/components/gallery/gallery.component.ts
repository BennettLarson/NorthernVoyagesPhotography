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
  public numImages: number;
  
  constructor(private router:Router) { 
   }

  ngOnInit() {
    this.constants = new Constants();
    this.currentPage = this.router.url;
    switch (this.currentPage) {
      case "/wedding":
        this._images = this.constants.w_images;
        break;
      case "/elopement":
        this._images = this.constants.e_images;
        break;
      case "/family":
        this._images = this.constants.c1_images;
        break;
      case "/couple":
        this._images = this.constants.c2_images;
        break;
    }
    
    this.numImages = this._images.length;
  }
}
