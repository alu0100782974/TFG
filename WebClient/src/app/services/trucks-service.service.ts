import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Truck } from '../pojo/truck.pojo';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class TrucksService {

  constructor(public http: Http) { }

  public getTruck(truckId: Number): Observable<Truck> {
    return this.http.get(`${environment.backendUrl}/trucks?id=${truckId}`).map(res => res.json());
  }

  public getTrucks(): Observable<Truck[]> {
    return this.http.get(`${environment.backendUrl}/trucks`).map(res => res.json());
  }

}
