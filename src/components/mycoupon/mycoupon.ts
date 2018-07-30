import { Component } from '@angular/core';

/**
 * Generated class for the MycouponComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mycoupon',
  templateUrl: 'mycoupon.html'
})
export class MycouponComponent {

  text: string;

  constructor() {
    console.log('Hello MycouponComponent Component');
    this.text = 'Hello World';
  }

}
