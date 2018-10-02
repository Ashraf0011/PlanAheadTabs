import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-today',
  templateUrl: 'today.html'
})
export class TodayPage {

  constructor(public navCtrl: NavController,private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(data => console.log(data));
  }
  
}
