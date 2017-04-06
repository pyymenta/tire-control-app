import { Component, OnInit } from '@angular/core';

import { NavController, NavParams, PopoverController, AlertController  } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { PopoverHome } from './popover.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AuthService]
})
export class HomePage implements OnInit{
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public popoverCtrl: PopoverController, 
  public alertCtrl: AlertController) {}
  
  user = this.authService.getSession();
  
    
  presentPopover(myEvent) {
     let popover = this.popoverCtrl.create(PopoverHome);
     popover.present({
       ev: myEvent
     });
  }

  
  ngOnInit(){
    console.log(this.user.token);
  }
}
