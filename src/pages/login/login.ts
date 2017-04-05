import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/User';
import { SignUpPage } from '../sign-up/sign-up';
import { AuthService } from '../../providers/auth-service'
import { HomePage } from '../home/home';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertCtrl: AlertController ) {}

  login(){
    Promise.resolve(this.authService.login(this.user))
    .then(res => this.redirectHome(res))
    .catch(error => console.log(error));
  }

  private redirectHome(userAuthData: any){
    let subtitle: string;
    let loginSuccess: boolean = false;
    if(!userAuthData.error){
      this.authService.saveSession(userAuthData);
      subtitle = `Autenticado com Sucesso!<br />
                    Olá, `+userAuthData.user_name;
      loginSuccess = true;
    }else{
      subtitle = userAuthData.error;
    }
    this.alertCtrl.create({
        title: 'Login',
        subTitle: subtitle,
        buttons: ['OK']
    }).present();
    if(loginSuccess){
        this.navCtrl.setRoot(HomePage);
    }
  }

  goToRegister(){
   // this.navCtrl.push(SignUpPage);
   this.navCtrl.push(SignUpPage);
  }

}
