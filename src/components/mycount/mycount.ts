import { Component,Input  } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the MycountComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mycount',
  templateUrl: 'mycount.html'
})
export class MycountComponent {
  public _title: string = '';

  @Input()
  set title(title: string) {
    this._title = title;
  }
  text: string;

  constructor(  public navCtrl: NavController) {
    console.log('Hello MycountComponent Component');
    this.text = 'Hello World';
  }
  public goBack() {
    this.navCtrl.pop();
  }
}
