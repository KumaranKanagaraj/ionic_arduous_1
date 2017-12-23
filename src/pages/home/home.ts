import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EliteApi } from '../../shared/shared';
import {ModelObject} from '../../model/model';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  eliteArray:ModelObject[];
  perPageElite:ModelObject[];
  items = [];

  constructor(private eliteApi: EliteApi,public navCtrl: NavController) {
    console.log("call service...")
    //this.eliteApi.getTournaments().then(data => { this.eliteArray = data });
    this.eliteApi.getTournaments().subscribe(data => {
        this.eliteArray = data;
        console.log(this.eliteArray);
        console.log(this.eliteArray.length);
        this.perPageElite=[];
        for (let i = 0; i < 30; i++) {
          this.perPageElite.push( this.eliteArray[i] );
        }
    });
    //   debugger;
  }
  
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    
    setTimeout(() => {
    for (let i = 0; i < 30; i++) {
      this.perPageElite.push( this.eliteArray[i] );
    }
    
    console.log('Async operation has ended');
    infiniteScroll.complete();
    }, 500);
    }

  goTo(item) {
    console.log(item);
    this.navCtrl.push(AboutPage, {
      data: item
    });
  }



}
