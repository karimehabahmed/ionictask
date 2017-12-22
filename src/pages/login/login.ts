import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
 import {HomePage} from '../home/home'
 import{Response} from '@angular/http'
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage  {
  loading: Loading;
  
  registerCredentials = { email: '', password: '' };
  user: any=null;
  constructor(private nav: NavController, private auth: AuthProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
 
 
  public login() {
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(
      data => {localStorage.setItem('user',data.User.token);
        if (data.Message=="Success")
          this.nav.setRoot(HomePage);
          else {
            let alert = this.alertCtrl.create({
              title: 'Login Failed',
              subTitle: 'Wrong Credentials',
              buttons: ['Ok']
            });
            alert.present();
          }
      },
      error => {
        let alert = this.alertCtrl.create({
          title: 'Login Failed',
          subTitle: 'Wrong Credentials',
          buttons: ['Ok']
        });
        alert.present();
         // this.loading = false;
      });
}
showLoading() {
  this.loading = this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  this.loading.present();
}
      
  }
 
  
 
 