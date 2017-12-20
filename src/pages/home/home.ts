import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../shared/shared';
import {ModelObject} from '../../model/model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  eliteArray:ModelObject[]

  constructor(private eliteApi: EliteApi) {
    console.log("call service...")
    //this.eliteApi.getTournaments().then(data => { this.eliteArray = data });
    this.eliteApi.getTournaments().subscribe(data => {
        this.eliteArray = data;
        console.log(this.eliteArray.length);
    });
  }

}
