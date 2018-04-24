import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Location } from '../../pojo/locationPojo';
/*
  Generated class for the LocationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationsProvider {

  public urlBackend;
  public truckId;

  constructor(public http: Http) {
  }

  public getLocations(): Observable<Location[]> {
    return this.http.get(`${this.urlBackend}/locations?truckId=${this.truckId}`).map(res => res.json());
  }

  public saveLocation(location: Location): void {
    this.http.post(`${this.urlBackend}/locations`, location).subscribe();
  }

  public setUrlBackend(server: string): void {
    this.urlBackend = server;
  }

  public setTruckId(truckId: number) {
    this.truckId = truckId
  }


}
