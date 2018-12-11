import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  visible: boolean;

  constructor() {
    this.visible = false;
   }

  public hide () {
    this.visible = false;
  }

  public show () {
    this.visible = true;
  }
}
