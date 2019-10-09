import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  result: string = '0';
  number = 0;
  numberAux = 0;
  numberSelected;;
  operator = '';

  constructor() {}

  calculate() {
    this.result = this.number + this.operator + this.numberAux;
  }

  clickNumber(numberSelected) {
    if (this.number == 0) {
      this.number = this.number * 10 + numberSelected;


    } else if (this.numberAux == 0) {
      this.numberAux = this.numberAux * 10 + numberSelected;
    }
  }

  click

}
