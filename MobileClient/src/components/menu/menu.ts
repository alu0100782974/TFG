import { Component, OnInit } from '@angular/core';
import { ServicesProvider } from '../../providers/clients-served/clients-served';
import { Service } from '../../pojo/servicePojo';
import { LocationsProvider } from '../../providers/locations/locations';
import { Location } from '../../pojo/locationPojo';
import { Client } from '../../pojo/clientPojo';
import { ClientsProvider } from '../../providers/clients/clients';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuComponent component.‽
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent implements OnInit {
  public services: Service[] = [];
  public locations: Location[] = [];
  public clientsToServe: Client[] = [];
  public truckId: number;

  public display = false;
  public display2 = false;
  public display3 = false;

  constructor(
    private navParams: NavParams,
    private servicesProvider: ServicesProvider,
    private locationProvider: LocationsProvider,
    private clientsProvider: ClientsProvider) {

    this.truckId = this.navParams.get('userId');
  }

  ngOnInit(): void {
    this.servicesProvider.services.subscribe(res => {
      this.services = res;
    });
  }

  public getClientsServed(truckId: number) {
    this.display2 = false;
    this.display3 = false;
    this.display = !this.display;

    this.servicesProvider.getClientsServed();
  }

  public getLocations(truckId: number) {
    this.display = false;
    this.display3 = false;
    this.display2 = !this.display2;

    this.locationProvider.getLocations().subscribe(loc => {
      this.locations = loc;
    });
  }

  public getClientsToServe() {

    this.display = false;
    this.display2 = false;
    this.display3 = !this.display3;

    this.clientsProvider.getNonServedClientsByTruckId(this.truckId).subscribe(c => {
      this.clientsToServe = c;
    })
  }

}
