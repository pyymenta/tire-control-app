import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
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
  errors: any; 
  confirmPass : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public signupService: SignupService, public alertCtrl: AlertController) {}

  signUp(){
    Promise.resolve(this.signupService.signUp(this.user))
    .then(res => this.redirectLogin(res))
    .catch(res => console.log(res));
  }

  private redirectLogin(res){
    if(res.errors){
      this.errors = res.errors;
    }else{
        this.alertCtrl.create({
          title: 'Sign Up',
          subTitle: 'The user has been successfully created! Please Log in!',
          buttons: ['OK']
        }).present();
        this.navCtrl.pop();
    }
  }

}
