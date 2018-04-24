import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Location } from '../pojo/location.pojo';
/*
  Generated class for the LocationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationsService {

  public urlBackend;

  constructor(public http: Http) {
  }

  public getLocations(truckId: Number): Observable<Location[]> {
    return this.http.get(`${this.urlBackend}/locations?truckId=${truckId}`).map(res => res.json());
  }

  /* public saveLocation(location: Location): void {
    this.http.post(`${this.urlBackend}/locations`, location).subscribe();
  } */

  public setUrlBackend(server: string): void {
    this.urlBackend = server;
  }

}
