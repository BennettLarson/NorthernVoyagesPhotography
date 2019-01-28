import {Component, Input, ViewChild} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  private row: number;
  private currentIndex: number;
  private images: string[]; 
  @ViewChild('content') private content;

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  public open() {
    this.modalService.open(this.content, {size: 'lg', backdrop: 'static', ariaLabelledBy: 'modal-basic-title'})
  }

  public setImages(_images: string[]) { this.images = _images; }
  public setRow(index: number ) { 
    this.row = index;
    this.currentIndex = index;
  }

  public forwardButtonClicked() {
    if (this.currentIndex + 4 < 16) {
      this.currentIndex = this.currentIndex + 4;
    } else if (this.currentIndex === 15 ) {
      console.log('end of the road jack!');
      this.setRow(0);
    } else {
      this.setRow(this.row + 1);
    }
  }

  public backButtonClicked() {
    if (this.currentIndex - 4 > -1) {
      this.currentIndex = this.currentIndex - 4;
    } else if (this.row === 0)  {
      this.setRow(3);
    } else {
      this.setRow(this.row + 11);
    }
  }

}