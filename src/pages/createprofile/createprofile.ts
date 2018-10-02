
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-createprofile',
  templateUrl: 'createprofile.html',
})
export class CreateprofilePage {
  
  profile = {} as Profile;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private afAuth: AngularFireAuth, 
    private afdb: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateprofilePage');
  }
  createProfile(profile){
    this.afAuth.authState.take(1).subscribe( auth =>{
      this.afdb.object(`profile/${auth.uid}`).set(this.profile)
      .then(()=> this.navCtrl.setRoot(TabsPage));

    })
  }

}
