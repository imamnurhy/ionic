import { Component, ViewChild, Renderer } from '@angular/core';
import { NavController, Platform, AlertController, ModalController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController,public platform: Platform, public renderer: Renderer, public alertCtrl: AlertController,
              public modalCtrl: ModalController) {
    }

 
}
