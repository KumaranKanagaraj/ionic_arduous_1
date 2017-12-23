import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ModelObject} from '../../model/model';
import { SocialSharing } from '@ionic-native/social-sharing';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private socialSharing: SocialSharing) {
    this.item = navParams.get('data');   
    console.log("AboutPage: "+ this.item); 
  }

  whatsappShare() {
    this.socialSharing.shareViaWhatsApp("happy christmas day dude", null, "https://iwishu.in").then(() => {
      console.log("shareViaWhatsApp: Success");
    }).catch(() => {
      console.error("shareViaWhatsApp: failed");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }

}
