import { Component } from '@angular/core';
import { ViewController, NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../../pages/login/login';
@Component({
  templateUrl: 'popover.component.html'
})
export class PopoverHome {
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public authService: AuthService,
  public alertCtrl: AlertController) {}

  close() {
    this.viewCtrl.dismiss();
  }
  showConfirmLogout(){
      this.close();
      let confirm = this.alertCtrl.create({
      title: 'Logout',
      message: 'Deseja fazer Logout?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.logout();
          }
        }
      ]
    });
    confirm.present();
  }

  logout(){
    Promise.resolve(this.authService.logout())
    .then(res => {
      this.alertCtrl.create({
        title: 'Logout',
        subTitle: 'Deslogado com Sucesso!',
        buttons: ['OK']
      }).present();
      this.navCtrl.setRoot(LoginPage); 
    });
  }
}