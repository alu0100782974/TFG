import { Injectable } from '@angular/core';
import { Service } from '../pojo/service.pojo';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class ServicesSerivce {

  public urlBackend;

  constructor(public http: Http) { }

  public getClientsServed(truckId: number): Observable<Service[]> {
    return this.http.get(`${environment.backendUrl}/services?truckId=${truckId}`).map(res => res.json());
  }

  public getAllServices(): Observable<Service[]> {
    return this.http.get(`${environment.backendUrl}/services`).map(res => res.json());
  }

}
