import { WelcomePage } from './../pages/welcome/welcome';
import { CreateprofilePage } from './../pages/createprofile/createprofile';

import { LoginPage } from './../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth' ;

import { TabsPage } from '../pages/tabs/tabs';
import { TodayPage } from '../pages/today/today';
import { PlanPage } from '../pages/plan/plan';
import { ProfilePage } from '../pages/profile/profile';
import { SummaryPage } from '../pages/summary/summary';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    PlanPage,
    SummaryPage,
    TodayPage,
    ProfilePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    CreateprofilePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config, 'MyPlannerAppwithFirestore'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    PlanPage,
    SummaryPage,
    TodayPage,
    ProfilePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    CreateprofilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
  ]
})
export class AppModule {}
