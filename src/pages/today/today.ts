import { AngularFireDatabase } from 'angularfire2/database';
import { activityupdate } from '../../models/activityupdate';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-today',
  templateUrl: 'today.html'
})
export class TodayPage {

   activity = {} as activityupdate;

  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private afdb: AngularFireDatabase) {
   
  }
  update(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afdb.object(`profile/${auth.uid}/activity`).set(this.activity)
    })
  }
  
}
