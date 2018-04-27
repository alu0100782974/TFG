import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Truck } from '../pojo/truck.pojo';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrucksService {

  public urlBackend;

  constructor(public http: Http) { }

  public getTruck(truckId: Number): Observable<Truck> {
    console.log(`${this.urlBackend}/trucks?id=${truckId}`);
    return this.http.get(`${this.urlBackend}/trucks?id=${truckId}`).map(res => res.json());
  }

  public getTrucks(): Observable<Truck[]> {
    return this.http.get(`${this.urlBackend}/trucks`).map(res => res.json());
  }

  public setUrlBackend(server: string): void {
    this.urlBackend = server;
  }
}
