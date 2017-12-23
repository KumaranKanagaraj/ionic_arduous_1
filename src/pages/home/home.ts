import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../shared/shared';
import {ModelObject} from '../../model/model';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  eliteArray:ModelObject[]

  constructor(private eliteApi: EliteApi,public navCtrl: NavController) {
    console.log("call service...")
    //this.eliteApi.getTournaments().then(data => { this.eliteArray = data });
    this.eliteApi.getTournaments().subscribe(data => {
        this.eliteArray = data;
        console.log(this.eliteArray.length);
    });
  }

  goTo(item) {
    console.log(item);
    this.navCtrl.push(AboutPage, {
      data: item
    });
  }

}
