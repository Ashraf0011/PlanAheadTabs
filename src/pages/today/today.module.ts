import { TodayPage } from './today';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';


@NgModule({
  declarations: [
    TodayPage,
  ],
  imports: [
    IonicPageModule.forChild(TodayPage),
  ],
})
export class TodayPageModule {}
