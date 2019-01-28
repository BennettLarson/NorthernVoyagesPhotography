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
    "../../../assets/images/one.jpg",
    "../../../assets/images/one.jpg",
    "../../../assets/images/two.jpeg",
    "../../../assets/images/three.jpg",
    "../../../assets/images/two.jpeg",
    "../../../assets/images/two.jpeg",
    "../../../assets/images/_DSC8860.jpg",
    "../../../assets/images/three.jpg",
    "../../../assets/images/two.jpeg",
    "../../../assets/images/_DSC8860.jpg",
    "../../../assets/images/three.jpg",
    "../../../assets/images/one.jpg",
    "../../../assets/images/_DSC8860.jpg"
  ];
  constructor() { }

  ngOnInit() {
  }

}
