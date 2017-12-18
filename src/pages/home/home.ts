import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../shared/shared';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private eliteApi: EliteApi) {
    console.log("call service...")
    this.eliteApi.getTournaments().then(data => {
      console.log(data);
    });
  }

}
