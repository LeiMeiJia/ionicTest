import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TestonePage} from "../testone/testone";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private navctl: NavController) {
    console.log("rffrff");
  }

  gotoTestonePage(){
    this.navctl.push(TestonePage,{
      item1 :'传值1'
    })
  }
  gotoTestpage(){
    this.navctl.push("TestPage")
  }

}
