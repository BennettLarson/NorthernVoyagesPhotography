import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-seniors',
  templateUrl: './seniors.component.html',
  styleUrls: ['./seniors.component.scss']
})
export class SeniorsComponent implements OnInit {
  public _images = [
    "../../../assets/images/one.jpg",
    "../../../assets/images/_DSC8860.jpg",
    "../../../assets/images/three.jpg",
    "../../../assets/images/two.jpeg",
    "../../../assets/images/_DSC8859.jpg",
    "../../../assets/images/compressedImg1.jpg",
    "../../../assets/images/compressedImg2.jpg",
    "../../../assets/images/compressedImg3.jpg",
    "../../../assets/images/kayBB.jpg",
    "../../../assets/images/_DSC8480-2.jpg",
    "../../../assets/images/_DSC8481-3.jpg",
    "../../../assets/images/_DSC8518-2.jpg",
    "../../../assets/images/_DSC8535-2.jpg",
    "../../../assets/images/_DSC8546-3.jpg",
    "../../../assets/images/_DSC8605.jpg",


    
  ];
  constructor() { 
   }

  ngOnInit() {
  }
}
