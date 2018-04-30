import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Location } from '../pojo/location.pojo';
import { environment } from '../../environments/environment';
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
    return this.http.get(`${environment.backendUrl}/locations?truckId=${truckId}`).map(res => res.json());
  }

}
