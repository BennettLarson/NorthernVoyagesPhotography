import {Component, Input, ViewChild, HostListener} from '@angular/core';

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
    this.setRow(this.currentIndex % 5, this.currentIndex);
    this.modalService.open(this.content, {size: 'lg', ariaLabelledBy: 'modal-basic-title'})
  }

  public setImages(_images: string[]) { this.images = _images; }
  public setRow(row: number, index: number = row ) { 
    this.row = row;
    this.currentIndex = index;
  }

  public forwardButtonClicked() {
    console.log('forward');
    if (this.currentIndex + this.images.length/3 < this.images.length) { // not at the end of a row
      this.currentIndex = this.currentIndex + this.images.length/3;
    } else if (this.currentIndex === this.images.length - 1 ) { // at the end of the final row
      this.setRow(0); 
    } else { // at the end of a row other than the final row
      this.setRow(this.row + 1); 
    }
  }

  public backButtonClicked() {

    console.log("back");
    if (this.currentIndex - this.images.length/3 > -1) { // not at the beginning of a row
      this.currentIndex = this.currentIndex - this.images.length/3;
    } else if (this.row === 0)  { // at the beginning of the first row
      this.setRow(this.images.length/3 - 1, this.images.length - 1);
    } else { // at the beginning of a row other than the first
      this.setRow(this.currentIndex - 1, ((this.currentIndex -1) +  2/3*this.images.length));
    }
  }

  @HostListener('document:keydown', ['$event']) keydown(event: KeyboardEvent){
    if(event.keyCode === 39) { //left arrow clicked
      this.forwardButtonClicked();

    } else if(event.keyCode === 37) { //right arrow clicked
      
      this.backButtonClicked();
    }
  }
}