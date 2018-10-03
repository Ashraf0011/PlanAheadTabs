import { Plans } from '../../models/plan';
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-about',
  templateUrl: 'plan.html'
})


  

export class PlanPage {
 
  plansitem = {} as Plans;
  
  constructor(public navCtrl: NavController, 
    public viewCtrl: ViewController,
    private afAuth: AngularFireAuth, 
    private afdb: AngularFireDatabase) {

  }
  ionViewDidLoad(){
   
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

  saveToPlans(plansitem){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afdb.object(`profile/${auth.uid}/plans`).set(this.plansitem)
    })

  }


}
