import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';


/**
 * Generated class for the SlidedemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slidedemo',
  templateUrl: 'slidedemo.html',
})
export class SlidedemoPage {
  @ViewChild(Slides) slides: Slides;
  option1: boolean;
  option2: boolean;
  option3: boolean;
  option4: boolean;

// 	public options: any = {
//     onInit: (slides: any) => { this.swiper = slides; }
// };
//   swiper: any;
//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   goto(slideNumber) {
// 		this.swiper.slideTo(slideNumber, 2000);
// 	}

updateSlide1() {
  debugger;
  console.log('option1 new state:' + this.option1);
  this.goToSlide(1)
  // if(this.option1){
  //   this.goToSlide();
  // }
}

updateSlide2() {
  debugger;
  console.log('option2 new state:' + this.option2);
  this.goToSlide(2)
  // if(this.option2){
  //   this.goToSlide();
  // }
}

updateSlide3() {
  debugger;
  console.log('option3 new state:' + this.option3);
  this.goToSlide(3)
  // if(this.option3){
  //   this.goToSlide();
  // }
}

  goToSlide(slideNumber) {
    debugger;
		this.slides.slideTo(slideNumber, 500);
	}

  next(slide, index) {
    slide.slider.slideTo(index, 2000)
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidedemoPage');
  }

}
