import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  public images: Array<string>;
  public imagesLoaded = 0;
  public allImagesLoaded = false;
  public imagesReceived = false;
  public visibility = 'dontShow';
  constructor(private homeService:HomeService, private navService:AppService) {
    this.homeService.getImages().subscribe(
      (data: string[]) => {
        this.images = data;
        this.imagesReceived = true;
    });
   }

  ngOnInit() {}

  public imageLoaded() {
    this.imagesLoaded++;
    console.log('images loaded: ' + this.imagesLoaded);
    if (this.imagesLoaded === 1 ) {
      this.navService.show();
    }
   
  }


}
