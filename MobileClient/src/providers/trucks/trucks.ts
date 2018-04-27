import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Truck } from '../../pojo/truckPojo';
/*
  Generated class for the LocationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrucksProvider {

    public urlBackend;

    constructor(public http: Http) {
    }

    public getTruck(truckId: Number): Observable<Truck> {
        return this.http.get(`${this.urlBackend}/trucks?id=${truckId}`).map(res => res.json());
    }

    public update(truck: Truck) {
        this.http.put(`${this.urlBackend}/trucks`, truck).subscribe();
    }

    public setUrlBackend(server: string): void {
        this.urlBackend = server;
    }

}