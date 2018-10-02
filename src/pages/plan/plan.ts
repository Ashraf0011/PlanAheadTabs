import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { StudyPage } from '../study/study';
import { ExercisePage } from '../exercise/exercise';

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

  addStudy(){
    this.navCtrl.setRoot(StudyPage);
  }
  addExercise(){
    this.navCtrl.setRoot(ExercisePage);
  }

}
