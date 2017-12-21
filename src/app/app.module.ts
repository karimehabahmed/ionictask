import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import {HttpModule} from '@angular/http';
import { DetailsProvider } from '../providers/details/details';
import {AccordionModule} from 'ng2-accordion'
import { AlertModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    MyApp,
    HomePage,LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpModule,AlertModule.forRoot(), 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    DetailsProvider
  ]
})
export class AppModule {}
