import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotation-div',
  templateUrl: './rotation-div.component.html',
  styleUrls: ['./rotation-div.component.less']
})
export class RotationDivComponent implements OnInit {

  rotateAngel = 0;
  maxRotation = 150;
  windowVidth: number;
  procentage;
  constructor() { } 

  ngOnInit() {
    this.windowVidth = window.innerWidth;
    console.log(this.windowVidth, ' windowVidth');
  }
  rotateHandlerLeft() {
    console.log(this.rotateAngel, 'rotate left');
    if (this.rotateAngel > -150) {
      this.rotateAngel--;
    }
  }
  rotateHandlerRight() {
    console.log(this.rotateAngel, 'rotate right');
    if (this.rotateAngel < 150) {
      this.rotateAngel++;
    }
  }
  testFill(event) {
    this.procentage = (event.screenX * 100)/this.windowVidth;
    this.procentage = Math.ceil(this.procentage);
    this.rotateAngel = (this.maxRotation * this.procentage)/100
    //console.log(this.rotateAngel, ' rotationAngle');
    //console.log(this.procentage, ' procentage');
  }


}
