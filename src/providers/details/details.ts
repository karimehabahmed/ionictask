import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
/*
  Generated class for the DetailsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetailsProvider {

  url:string='https://demo.paymeapp.co/api/v2/mobile/home?';
  constructor(private http: Http){}
  

  getdata(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    let urlSearchParams = new URLSearchParams();
    console.log(localStorage.getItem('user'));
    urlSearchParams.append('token', localStorage.getItem('user'));
    let body = urlSearchParams.toString()
   // console.log(body);
        return this.http.post(this.url , body,options).map((res) => { return res.json() });
                                                      
      
    }
  }


