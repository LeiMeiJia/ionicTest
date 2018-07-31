import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Events, ModalController} from 'ionic-angular';
import {TestonePage} from "../testone/testone";
import {DemoPage} from "../demo/demo";

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  public msg:string = "⾸⻚的参数";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController, //使⽤modal⽅式弹出⻚⾯的时候需要声明他
              public events: Events )//使⽤观察者模式传值需要声明)
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
/**
 * 跳转到下⼀个⻚⾯
 */
gotoTestonePage = () => {
  this.navCtrl.push(TestonePage);
}
/**
 * 使⽤promis⽅式传值
 */
myCallBackFunction = (params) => {
  return new Promise((resolve, reject) => {
    if(typeof(params)!='undefined'){
      resolve('ok');
      console.log('回调数据回来啦啦啦啦: '+ params);
    }else{
      reject(Error('error'));
    }
  });
}
/**跳转到下⼀个⻚⾯ */
dosomething = ()=> {
//跳转⻚⾯的两种⽅式
//⽅式⼀: push形式
//从前向后传值
  /** 第⼀个参数: 需要跳转的组件的名称. 第⼆个参数: ⻚⾯之间传递参数 */
this.navCtrl.push("DemoPage",{
   para:this.msg
});
//push形式从后向前传值⽅式⼀:使⽤promise
// this.navCtrl.push(TripPage,{
// callBack:this.myCallBackFunction
// });

//push形式从后向前传值⽅式⼀:使⽤js⾥⾯的观察者模式(publish/subscribe)
//需要导⼊Events
//   this.events.subscribe('pass-value-event', (params) => {
//     console.log("event回调⽅式数据回来了"+params);
//     this.events.unsubscribe('pass-value-event');
//   })
//   this.navCtrl.push(TripPage);

//⽅式⼆,模态的⽅式,
// let modal = this.modalCtrl.create(TripPage);
// //模态出来的⻚⾯消失的时候接收从模态出来的⻚⾯传递过来的参数
// modal.onDidDismiss(data => {
// console.log(data);
// });
// modal.present();
}
}
