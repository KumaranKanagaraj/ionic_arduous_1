import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ModelObject} from '../../model/model';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  item: ModelObject;  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');   
    console.log("AboutPage: "+ this.item); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }

}
