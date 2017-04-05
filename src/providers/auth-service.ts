import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { User } from '../models/User';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {
  private url = 'http://localhost:8080';
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  constructor(public http: Http) {
    
  }
  login(u: User): any{
       return this.http.post(this.url+'/login','email='+u.email+'&passwd='+u.pass,{headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(error => error.json());
  }
  saveSession(session: any){
      localStorage.setItem('userAuthData',JSON.stringify(session));
  }
  getSession(){
    return JSON.parse(localStorage.getItem('userAuthData'));
  }

}
