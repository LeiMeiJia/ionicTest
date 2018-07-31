import { Component,ViewChild } from '@angular/core';
import {IonicPage, NavController, NavParams, Navbar, Events, ViewController} from 'ionic-angular';
import {parallaxSetTransition} from "ionic-angular/umd/components/slides/swiper/swiper-parallax";

/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {
  @ViewChild(Navbar) navBar: Navbar; /**导航栏点击返回按钮 拦截返回按钮的⽅法 */
  content: string;
  // callback;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public view: ViewController, //模态⽅式消失⻚⾯的时候⽤到的
              private events: Events)
  {
 //借助navParams获取从上个⻚⾯传递过来的参数
 //    this.content = navParams.get('para');
 //    this.callback = navParams.get("callBack");
    console.log(' DemoPage para:'+this.content);
  }

  ionViewDidLoad() {
    // this.navBar.backButtonClick = this.backButtonClick;
    console.log('ionViewDidLoad DemoPage');
  }
  backButtonClick = (e: UIEvent) => {
//⽅式⼀: promise⽅式回调
// let param = "这个值是传到上⼀个⻚⾯的值";
// this.callback(param).then(() => {
// this.navCtrl.pop();
// });

 //⽅式⼆:使⽤观察者模式回调
 //    this.navCtrl.pop().then(() => {
 //      this.events.publish('pass-value-event', '观察者模式传递的参数');
 //    });
  }

  //按钮点击
  dismisspage(){
//退出⻚⾯的⽅式
//⽅式⼀: pop形式
// this.navCtrl.pop();
//⽅式⼆:模态出来的时候,需要使⽤dismiss⽅式
//销毁⻚⾯的时候传递参数
    let data = {
      name:'我是模态⻚⾯的数据'
    }
    this.view.dismiss(data)
  }
}
