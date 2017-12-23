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

  shareViaWhatsApp() {
    this.socialSharing.shareViaWhatsApp("happy christmas day dude", "http://iwishu.in/public/img/xmass.jpg", "https://iwishu.in").then(() => {
      console.log("shareViaWhatsApp: Success");
    }).catch(() => {
      console.error("shareViaWhatsApp: failed");
    });
  }

  shareViaFacebook() {
    this.socialSharing.shareViaFacebook("happy christmas day dude", "http://iwishu.in/public/img/xmass.jpg", "https://iwishu.in").then(() => {
      console.log("shareViaFacebook: Success");
    }).catch(() => {
      console.error("shareViaFacebook: failed");
    });
  }

  shareViaTwitter() {
    this.socialSharing.shareViaTwitter("happy christmas day dude", "http://iwishu.in/public/img/xmass.jpg", "https://iwishu.in").then(() => {
      console.log("shareViaTwitter: Success");
    }).catch(() => {
      console.error("shareViaTwitter: failed");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }

}
