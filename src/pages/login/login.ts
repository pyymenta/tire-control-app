import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/User';
import { SignUpPage } from '../sign-up/sign-up';
import { AuthService } from '../../providers/auth-service'
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[AuthService]
})
export class LoginPage {
  user : User = new User(null,null);
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    Promise.resolve(this.authService.login(this.user))
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  goToRegister(){
   // this.navCtrl.push(SignUpPage);
   this.navCtrl.push(SignUpPage);
  }

}
