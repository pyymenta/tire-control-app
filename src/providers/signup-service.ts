import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../models/User'

/*
  Generated class for the SignupService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SignupService {
  private url = 'http://localhost:8080';
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  constructor(public http: Http) {}
  signUp(u: User): any{
      return this.http.post(this.url+'/signup','name='+u.fullname+'&username='+u.user+'&email='+u.email+'&passwd='+u.pass,{headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(error => error.json());
  }
}
