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
export class LoginPage  implements OnInit {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  user: any=null;
  constructor(private nav: NavController, private auth: AuthProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
 
  ngOnInit(){
    this.auth.login().subscribe(allowed => this.user=JSON.parse(JSON.stringify(allowed)));
  }
  public login() {
    
     
    
    console.log(this.user.User.token);
    localStorage.setItem('user',this.user.User.token);
      if (this.user.User.isvalidated===1) {        
        this.nav.setRoot(HomePage);
      } else {
        let alert = this.alertCtrl.create({
          title: 'Login Failed',
          subTitle: 'Wrong Credentials',
          buttons: ['Ok']
        });
        alert.present();
      }
      
  }
 
  
 
 }