

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  profileData: Observable<any>;

  constructor(public navCtrl: NavController,private afAuth: AngularFireAuth, 
    private afdb: AngularFireDatabase) { 

  }
  ionViewDidLoad(){
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid){
        this.profileData = this.afdb.object(`profile/${data.uid}`).valueChanges();
      }
    })
  }

}
// this.afAuth.authState.take(1).subscribe( data => {
//   this.profileData = this.afdb.object(`profile/${data.uid}`).valueChanges();
// })