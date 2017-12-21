import { Component,OnInit, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailsProvider} from '../../providers/details/details'
import {Observable} from 'rxjs/Observable';
import{Response} from '@angular/http'
import 'rxjs/add/operator/delay';
import { LoginPage } from '../login/login';
@Component({

  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {
  data:any=null;
  merchants:any[];
  products:any[];
  promotions:any[];
  constructor(public navCtrl: NavController,public dp:DetailsProvider) {

  }
  ngAfterViewInit(){
    this.dp.getdata().subscribe(allowed => this.data=JSON.parse(JSON.stringify(allowed)));
    console.log(this.data);
     
  }
  Merchants(){
    this.merchants= this.data.merchants;
  //   for(var i = 1; i <= this.merchants.length; i++){
  //     if(this.merchants[i].description===null)
  //     {
          
  //     }
  //  }

    console.log(this.merchants);
  }
  Products(){
    this.products=this.data.products;
    console.log(this.products);
  }
  Promotions(){
    this.promotions=this.data.promotions;
    console.log(this.promotions);
  }
  logout()
  {
    localStorage.removeItem('user');
    this.navCtrl.setRoot(LoginPage);
  }
  
}

