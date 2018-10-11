import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {

  updateData: Observable<any>;
  planData: Observable<any>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth, 
    private afdb: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummaryPage');

    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid){
        this.updateData = this.afdb.object(`profile/${data.uid}/weeks/activity`).valueChanges();
        this.planData = this.afdb.object(`profile/${data.uid}/weeks/plans`).valueChanges();
      }
    })


  }

}
