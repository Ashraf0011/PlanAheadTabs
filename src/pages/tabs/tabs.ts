import { Component } from '@angular/core';

import { PlanPage } from '../plan/plan';
import { TodayPage } from '../today/today';
import { SummaryPage } from '../summary/summary'
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TodayPage;
  tab2Root = PlanPage;
  tab3Root = SummaryPage;
  tab4Root = ProfilePage;

  constructor() { 
  }

}
