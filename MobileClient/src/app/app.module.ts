import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CommonModule } from '@angular/common';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { LoginPageModule } from '../pages/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { ServicesProvider } from '../providers/clients-served/clients-served';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationsProvider } from '../providers/locations/locations';
import { NextClientProvider } from '../providers/nextclient/nextclient';
import { TrucksProvider } from '../providers/trucks/trucks';
import { ClientsProvider } from '../providers/clients/clients';
import { RealTimeProvider } from '../providers/real-time/real-time';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServicesProvider,
    LocationsProvider,
    NextClientProvider,
    TrucksProvider,
    ClientsProvider,
    RealTimeProvider
  ]
})
export class AppModule { }
