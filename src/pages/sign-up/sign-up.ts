import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/User';
import { SignupService } from '../../providers/signup-service';
/*
  Generated class for the SignUp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
  providers: [SignupService]
})
export class SignUpPage {
  user : User = new User(null,null);
  confirmPass : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public signupService: SignupService) {}

  signUp(){
    Promise.resolve(this.signupService.signUp(this.user))
    .then(res => console.log("info: ",res))
    .catch(res => console.log("error: ",res));
  }

}
