import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss']
})
export class GalleryImageComponent implements OnInit {

  @ViewChild('myModal') private modal: ModalComponent;
  @Input() imagesIndex: number;
  @Input() images: string[];
  public element: any;
  
  constructor() { }

  ngOnInit() {
    this.element = document.getElementsByClassName("MainContainer");
  }

  public imageClicked() {
    this.modal.setImages(this.images);
    this.modal.setRow(this.imagesIndex);
    this.modal.open();
  }

}
