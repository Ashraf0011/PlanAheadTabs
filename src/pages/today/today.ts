import { AngularFireDatabase } from 'angularfire2/database';
import { activityupdate } from '../../models/activityupdate';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';



@Component({
  selector: 'page-today',
  templateUrl: 'today.html'
})
export class TodayPage {

   activity = {} as activityupdate;

  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private afdb: AngularFireDatabase,
    private toastCtrl: ToastController) {
   
  }
  update(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afdb.object(`profile/${auth.uid}/weeks/activity`).set(this.activity)
        
      
      let toast = this.toastCtrl.create({
          message: 'Activity Updated to database. Thnks for using Planner.',
          duration: 2000,
          position: 'bottom'
        });
        toast.present();
      
    })
  }
  
}
