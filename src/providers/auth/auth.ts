import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  url:string='https://demo.paymeapp.co/api/v2/login?';
  constructor(private http: Http){}
  
  login() {
  
     
        
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('email', "trialPIN@gmail.com");
    urlSearchParams.append('password',"0146522653");
    urlSearchParams.append('device_model',"Gt5776");
    urlSearchParams.append('device_token',"a65s4d");
    urlSearchParams.append('device_platform',"Android");
    urlSearchParams.append('app_version',"2.0");
    let body = urlSearchParams.toString()
    console.log(body);
        return this.http.post(this.url , body,options).map((response: Response) => response.json());
      
    }
}
