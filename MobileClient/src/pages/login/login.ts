import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TrucksProvider } from '../../providers/trucks/trucks';
//import { UserDataProvider } from '../../providers/user-data/user-data';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public userId: number = 3;
  public passwd: string = 'passwd';
  public serverId: string = 'localhost';
  public port1: string = '8181';
  public port2: string = '3001';
  public ok: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private truckProvider: TrucksProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public pushParams() {
    let backendUrl = `http://${this.serverId}:${this.port2}`;
    this.truckProvider.setUrlBackend(backendUrl);
    this.truckProvider.getTruck(this.userId).subscribe(truck => {
      if (truck == null) {
        alert('TruckId not registered');
        this.navCtrl.push(LoginPage);
      } else {
        this.navCtrl.push(HomePage, {
          userId: this.userId,
          serverId: this.serverId,
          port1: this.port1,
          port2: this.port2
        });
      }
    }, err => {
      alert(`Error: ${err.message} - ${err}`)
    });
  }
}
