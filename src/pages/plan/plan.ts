import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'plan.html'
})


  

export class PlanPage {
 
  
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
  ionViewDidLoad(){
   
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

}
